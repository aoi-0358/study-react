import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";

export const UserByUserId = (props) => {
  const { data, error } = useSWR(
    props.id ? `https://jsonplaceholder.typicode.com/user/${props.Id}` : null,
    fetcher
  );

  if (!data && !error) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div>Created by {data.name}</div>;
};
