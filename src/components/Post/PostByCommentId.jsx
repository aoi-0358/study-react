import { Inter } from "@next/font/google";
import Link from "next/link";
import { usePost } from "src/hooks/usePost";

const inter = Inter({ subsets: ["latin"] });

export const PostByCommentId = (props) => {
  const { data, user, error, isLoading } = usePost(props.id);

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <Link href={`/posts/${data?.id}`}>
        <div>{data?.title}</div>
      </Link>
    </>
  );
};
