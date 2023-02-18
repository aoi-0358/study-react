import Head from "next/head";
import { Inter } from "@next/font/google";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

const Index = () => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>Next.jsで学ぶReact講座</h1>
      <p>JSONPlaceholderのAPIを色々叩いてみるよ！</p>
    </div>
  );
};

export default Index;
