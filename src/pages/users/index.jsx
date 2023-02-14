import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Inter } from "@next/font/google";
import { Header } from "src/components/Header";
import { UsersComponent } from "@/components/Users/Index";

const inter = Inter({ subsets: ["latin"] });

const Users = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Users Page</title>
      </Head>
      <Header />
      <UsersComponent />
    </div>
  );
};

export default Users;
