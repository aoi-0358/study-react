import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Inter } from "@next/font/google";
import { Header } from "@/components/Header";
import { useRouter } from "next/router";
import { useSWR } from "swr";

const inter = Inter({ subsets: ["latin"] });

const PostId = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts/1",fetcher
  );
  console.log({ data, error });

  return (
    <>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <Header />
      <div>
        <h1>{data?.title}</h1>
        <p>{data?.body}</p>
      </div>
    </>
  );
};

export default PostId;
