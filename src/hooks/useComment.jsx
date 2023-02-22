import { useRouter } from "next/router";
import { fetcher } from "@/utils/fetcher";
import useSWRImmutable from "swr/immutable";
import { API_URL } from "@/utils/const";

export const useComment = () => {
  const router = useRouter();
  const { data, error } = useSWRImmutable(
    router.query.id
      ? `${API_URL}/comments/${router.query.id}`
      : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
