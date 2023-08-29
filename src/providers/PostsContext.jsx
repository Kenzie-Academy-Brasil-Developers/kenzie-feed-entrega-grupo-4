import { createContext } from "react";
import { useMutation } from "react-query";
import { apiFeed } from "../services/api";

export const PostsContext = createContext({});

export const PostsProvider = ({ children }) => {
  const createPost = useMutation({
    mutationFn: (postData) => {
      const { userId, name, token } = JSON.parse(
        localStorage.getItem("@UserData")
      );
      const newPost = {
        title: "4 lugares para viajar nas próximas férias de verão",
        description:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        owner: name,
        userId: userId,
        image:
          "https://res.cloudinary.com/dsbkp5841/image/upload/v1688391686/Rectangle_4_lvbqtd.jpg",
      };
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

  return (
    <PostsContext.Provider value={{ createPost }}>
      {children}
    </PostsContext.Provider>
  );
};
