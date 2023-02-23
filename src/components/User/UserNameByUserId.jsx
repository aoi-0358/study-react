
import { API_URL } from "@/utils/const";
import { useFetch } from "@/hooks/useFetch";

export const UserNameByUserId = (props) => {
  const { data, error, isLoading } = useFetch(
    props.id ? `${API_URL}/user/${props.Id}` : null
  );

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div className="text-lg">Created by {data.name}</div>;
};
