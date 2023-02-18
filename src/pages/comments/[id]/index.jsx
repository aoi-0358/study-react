import { Inter } from "@next/font/google";
import { Header } from "src/components/Header";
import { CommentComponent } from "@/components/Comments";

const inter = Inter({ subsets: ["latin"] });

const CommentsId = () => {
  return (
    <div>
      <Header />
      <CommentComponent />
    </div>
  );
};

export default CommentsId;
