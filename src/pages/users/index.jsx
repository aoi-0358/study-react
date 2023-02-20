import Head from "next/head";
import { Inter } from "@next/font/google";
import { Header } from "src/components/Header";
import { UsersComponent } from "@/components/Users/Index";
import { SWRConfig } from "swr";
import { resolve } from "styled-jsx/css";

const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps = async () => {
  const USERS_API_URL = `https://jsonplaceholder.typicode.com/users`;
  const users = await fetch(USERS_API_URL);
  const usersData = await users.json();

  return {
    props: {
      fallback: {
        [USERS_API_URL]: usersData,
      },
    },
  };
};

const Users = (props) => {
  const { fallback } = props;
  return (
    <div>
      <Head>
        <title>Users Page</title>
      </Head>
      <SWRConfig value={{ fallback }}>
        <Header />
        <UsersComponent />
      </SWRConfig>
    </div>
  );
};

export default Users;
