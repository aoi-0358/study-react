import { Inter } from "@next/font/google";
import { PostDetail } from "@/components/Post/PostDetail";

const inter = Inter({ subsets: ["latin"] });

const PostsId = () => {
  return (
    <div>
      <PostDetail />
    </div>
  );
};

export default PostsId;
