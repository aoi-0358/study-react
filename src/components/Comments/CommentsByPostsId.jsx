import { useCommentsByPostId } from "@/hooks/useFetchArray";
import Link from "next/link";

export const CommentsByPostsId = (props) => {
  const { data, error, isLoading, isEmpty } = useCommentsByPostId(props.Id);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isEmpty) {
    return <p>No comments found.</p>;
  }
  return (
    <ol>
      {data.map((comment) => {
        return (
          <li key={comment.id}>
            <Link href={`/comments/${comment.id}`}>
              <div>{comment.body}</div>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};

