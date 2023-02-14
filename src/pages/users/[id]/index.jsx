import { UserComponent } from "@/components/User";
import styles from "@/styles/Home.module.css";
import { Inter } from "@next/font/google";
import { Header } from "src/components/Header";

const inter = Inter({ subsets: ["latin"] });

const UsersId = () => {
  return (
    <div className={styles.container}>
      <Header />
      <UserComponent />
    </div>
  );
};

export default UsersId;
