import { createContext, useEffect, useState } from "react";
import { apiFeed } from "../services/api";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const PostsContext = createContext({});

export const PostsProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isOpenModalNewPost, setIsOpenModalNewPost] = useState(false);

  const revalidate = () => {
    client.invalidateQueries({ queryKey: "post" });
  };

  const getPostById = async (postId) => {
    const { data } = await apiFeed.get(`posts/${postId}?_embed=likes`);
    localStorage.setItem("@PostId", data.id);
    navigate("/viewPost");
  };

  const [dataPost, setDataPost] = useState({
    id: Number,
    title: String,
    owner: String,
    image: String,
    description: String,
  });

  const client = useQueryClient();

  const { data: postList, isLoading } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const { data } = await apiFeed.get("posts?_embed=likes");
      return data;
    },
  });

  const editPost = useMutation({
    mutationFn: async (postUpdate) => {
      const { token } = JSON.parse(localStorage.getItem("@UserData"));
      return await apiFeed.put(`/posts/${postUpdate.id}`, postUpdate, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      revalidate();
      toast.success("Post editado com sucesso!");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const createPost = useMutation({
    mutationFn: (postData) => {
      const { userId, name, token } = JSON.parse(
        localStorage.getItem("@UserData")
      );
      const newPost = { ...postData, userId: userId, owner: name };
      return apiFeed.post("/posts", newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      revalidate();
      setIsOpenModalNewPost(false);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const deletePost = useMutation({
    mutationFn: (postId) => {
      const { token } = JSON.parse(localStorage.getItem("@UserData"));
      console.log(postId);
      return apiFeed.delete(`/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (teste) => {
      revalidate();
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const addLikePost = (postId) => {
    const { token, userId } = JSON.parse(localStorage.getItem("@UserData"));

    const dataLike = {
      userId: userId,
      postId: postId,
    };

    return apiFeed.delete(`/likes`, dataLike, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const deleteLikePost = (postId) => {
    const { token } = JSON.parse(localStorage.getItem("@UserData"));
    return apiFeed.delete(`/likes/${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const postForId = async (postId) => {
    try {
      const { data } = await apiFeed(`/posts/${postId}`);
      setDataPost({
        id: data.id,
        title: data.title,
        image: data.image,
        description: data.description,
        owner: data.owner,
        userId: data.userId,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PostsContext.Provider
      value={{
        createPost,
        editPost,
        postList,
        deletePost,
        isOpenModalNewPost,
        setIsOpenModalNewPost,
        dataPost,
        setDataPost,
        isLoading,
        addLikePost,
        deleteLikePost,
        getPostById,
        postForId,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
