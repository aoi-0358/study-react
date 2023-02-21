import { UserComponent } from "@/components/User";
import { Inter } from "@next/font/google";
import { Header } from "src/components/Header";
import { SWRConfig } from "swr";

const inter = Inter({ subsets: ["latin"] });

export const getServerSideProos = async (ctx) => {
  const { id } = ctx.query;

  //ユーザー情報の取得
  const USER_API_URL = `${API_URL}/users/${id}`;
  const user = await fetch(USER_API_URL);
  const userData = await user.json();

  //ユーザーの投稿の取得
  const POSTS_API_URL = `${API_URL}/posts?userId=${userData.id}`;
  const posts = await fetch(POSTS_API_URL);
  const postsData = await posts.json();

  return {
    props: {
      fallback: {
        [USER_API_URL]: userData,
        [POSTS_API_URL]: postsData,
      },
    },
  };
};

const UsersId = (props) => {
  const { fallback } = props;
  return (
    <SWRConfig value={{ fallback }}>
      <Header />
      <UserComponent />
    </SWRConfig>
  );
};

export default UsersId;
