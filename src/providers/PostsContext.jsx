import { createContext } from "react";
import { apiFeed } from "../services/api";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";

export const PostsContext = createContext({});

export const PostsProvider = ({ children }) => {
  const revalidate = () => {
    client.invalidateQueries({ queryKey: "post" });
  };

  const client = useQueryClient();

  const { data: postList } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      return await apiFeed.get("posts?_embed=likes");
    },
  });
  // console.log(postList);

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

  return (
    <PostsContext.Provider value={{ editPost, postList }}>
      {children}
    </PostsContext.Provider>
  );
};
