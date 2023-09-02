import { createContext, useState } from "react";
import { apiFeed } from "../services/api";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const PostsContext = createContext({});

export const PostsProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isOpenModalNewPost, setIsOpenModalNewPost] = useState(false);
  const [lsPost, setLsPost] = useState(false);

  const revalidate = () => {
    client.invalidateQueries({ queryKey: "post" });
  };

  const getPostById = async (postId) => {
    localStorage.setItem("@PostId", postId);
    setLsPost(postId);
  };

  const [editingPost, setEditingPost] = useState(null);

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
      toast.success("Post editado com sucesso!");
      revalidate();
      navigate("dashboard");
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
      toast.success("Post criado com sucesso!");
      revalidate();
      setIsOpenModalNewPost(false);
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
    onSuccess: () => {
      toast.warning("Post deletado com sucesso!");
      revalidate();
    },
  });

  const addLikePost = useMutation({
    mutationFn: (postId) => {
      const { token, userId } =
        JSON.parse(localStorage.getItem("@UserData")) || {};

      const dataLike = {
        userId: userId,
        postId: postId,
      };

      return apiFeed.post(`/likes`, dataLike, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      revalidate();
    },
  });

  const removeLike = (likeId) => {
    const { token } = JSON.parse(localStorage.getItem("@UserData"));
    try {
      apiFeed.delete(`likes/${likeId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      revalidate();
    } catch (error) {}
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
    } catch (error) {}
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
        getPostById,
        postForId,
        lsPost,
        removeLike,
        addLikePost,
        editingPost,
        setEditingPost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
