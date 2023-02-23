import { Header } from "@/layouts/AppLayout/Header";

export const AppLayout = (props) => {
  return (
    <div
      className="flex flex-col items-center mx-auto px-2 
    min-h-screen max-w2xl"
    >
      <Header />
      {props.children}
    </div>
  );
};
