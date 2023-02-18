import PostsId from "@/pages/posts/[id]";
import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

const useFetchArray = (url) => {
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};

const API_URL = "https://jsonplaceholder.typicode.com";

export const useComments = () => {
  return useFetchArray(`${API_URL}/comments`, fetcher);
};

export const usePosts = () => {
  return useFetchArray(`${API_URL}/posts`, fetcher);
};

export const useUsers = () => {
  return useFetchArray(`${API_URL}/users`, fetcher);
};

export const useCommentsByPostId = (id) => {
  return useFetchArray(id ? `${API_URL}/comments?postsId=${id}` : null);
};

export const usePostsByUserId = (id) => {
  return useFetchArray(id ? `${API_URL}/posts?userId=${id}` : null);
};