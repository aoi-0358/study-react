import { useComments } from "@/hooks/useComments";
import Link from "next/link";


export const CommentComponent = () => {
  const { data, error, isLoading, isEmpty } = useComments();

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
