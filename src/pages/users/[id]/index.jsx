import { UserComponent } from "@/components/User";
import { Inter } from "@next/font/google";
import { Header } from "src/components/Header";
import { SWRConfig } from "swr";

const inter = Inter({ subsets: ["latin"] });

export const getServerSideProos = async (ctx) => {
  const { id } = ctx.query;
  const API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;
  const user = await fetch(API_URL);
  const userData = await user.json();
  return {
    props: {
      fallback: {
        [API_URL]: userData,
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
