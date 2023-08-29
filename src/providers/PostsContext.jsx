import { createContext, useState } from "react";
import { apiFeed } from "../services/api";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";

export const PostsContext = createContext({});

export const PostsProvider = ({ children }) => {
  const [isOpenModalNewPost, setIsOpenModalNewPost] = useState(false);
  const client = useQueryClient();

  const revalidate = () => {
    client.invalidateQueries({ queryKey: "post" });
  };

  const { data: postList } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const { data } = await apiFeed.get("posts?_embed=likes");
      return data
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

  return (
    <PostsContext.Provider
      value={{
        createPost,
        editPost,
        postList,
        deletePost,
        isOpenModalNewPost,
        setIsOpenModalNewPost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
