import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/posts", label: "Posts" },
  { href: "/users", label: "Users" },
  { href: "/comments", label: "Comments" },
];

export const Header = () => {
  return (
    <header className="flex justify-center items-center border-b w-full h-24">
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href}>
            <div className="inline-block py-2 px-6 text-xl hover: text-bule-500 forcus: text-bule-500 active: text-bule-500">
              {item.label}
            </div>
          </Link>
        );
      })}
    </header>
  );
};
