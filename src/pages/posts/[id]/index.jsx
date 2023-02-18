import { Inter } from "@next/font/google";
import { Header } from "src/components/Header";
import { Post } from "src/components/Post";

const inter = Inter({ subsets: ["latin"] });

const PostsId = () => {
  return (
    <div>
      <Header />
      <Post />
    </div>
  );
};

export default PostsId;
