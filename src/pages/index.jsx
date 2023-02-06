import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Main } from "src/components/main";
import { FooterLinks } from "@/components/FooterLinks";
import { Headline } from "@/components/Headline";
import { Img } from "@/components/Img";
import { Header } from "@/components/Header";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

//--------------------home
const Home = (props) => {
  const [posts, setposts] = useState([]);

  const getPosts = useCallback(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    setposts(json);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  console.log(posts);

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />

     {posts.length > 0 ?(
      <ol>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ol> ) : null}
    </>
  );
};

export default Home;
