import { useFetch } from "@/hooks/useFetch";
import { API_URL } from "@/utils/const";
import Link from "next/link";

export const PostTitleByCommentId = (props) => {
  const { data, user, error, isLoading } = useFetch(
    props.id ? `${API_URL}/posts${props.id}` : null
  );

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Link href={`/posts/${data?.id}`}>
      <div className="text-lg hover:text-bule-500">{data?.title}</div>
    </Link>
  );
};
