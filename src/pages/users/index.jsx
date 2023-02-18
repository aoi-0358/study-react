import Head from "next/head";
import { Inter } from "@next/font/google";
import { Header } from "src/components/Header";
import { UsersComponent } from "@/components/Users/Index";

const inter = Inter({ subsets: ["latin"] });

const Users = () => {
  return (
    <div>
      <Head>
        <title>Users Page</title>
      </Head>
      <Header />
      <UsersComponent />
    </div>
  );
};

export default Users;
