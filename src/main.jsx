import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { UserProvider } from "./providers/UserContext.jsx";
import { PostsProvider } from "./providers/PostsContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <PostsProvider>
        <App />
      </PostsProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
