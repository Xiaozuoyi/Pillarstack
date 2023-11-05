import Link from "next/link";
import { FooterTitle } from "../SVGs/FooterTitle";
import { GoArrowUpRight } from "react-icons/go";

export default function Footer() {
  const links = [
    {
      id: 1,
      href: "/about",
      label: "About",
    },
    {
      id: 2,
      href: "/",
      label: "Add a resource",
    },
    {
      id: 3,
      href: "/",
      label: "Contribute to this project",
    },
    {
      id: 4,
      href: "/",
      label: "Support this project",
    },
    {
      id: 5,
      href: "/",
      label: "Share this project",
    },
  ];

  return (
    <footer className="mt-32 ">
      <div className="border-b border-b-dim-gray pb-6">
        <span className="sr-only">PILLARSTACK</span>
        <FooterTitle />
      </div>
      <div className="flex flex-col sm:flex-row items-start justify-between pt-6 pb-10 text-text">
        <div className="space-x-1 pb-4">
          <span>Made by</span>
          <Link className="font-bold" href="https://www.huyng.xyz">HuyNG</Link>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-2">
          {links.map((link) => (
            <li key={link.id} className="flex">
              <Link href={link.href}>{link.label}</Link>
              <GoArrowUpRight className=" fill-light-gray stroke-[0.2]" />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}