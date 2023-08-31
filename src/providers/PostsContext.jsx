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
    title: String,
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
    mutationFn: async (formData, postId) => {
      const { token, userId, name } = JSON.parse(
        localStorage.getItem("@UserData")
      );
      const newPost = [...formData, { userId: userId, name: name }];
      return await apiFeed.put(`/posts/${postId}`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      revalidate();
      toast.success("Post editado com sucesso!");
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
    onSuccess: (teste) => {
      console.log(teste);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const deletePost = useMutation({
    mutationFn: (postId) => {
      const { token } = JSON.parse(localStorage.getItem("@UserData"));
      return apiFeed.delete(`/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (teste) => {
      console.log(teste);
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
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
