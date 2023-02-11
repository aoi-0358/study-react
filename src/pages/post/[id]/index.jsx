import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Inter } from "@next/font/google";
import { Header } from "src/components/Header";
import { Post } from "src/components/Post";

const inter = Inter({ subsets: ["latin"] });

const PostId = () => {
  return (
    <>
      <Header />
      <Post />
    </>
  );
};

export default PostId;
