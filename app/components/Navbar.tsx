'use client';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

const Links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Men",
    link: "/Men",
  },
  {
    name: "Women",
    link: "/Women",
  },
  {
    name: "Teens",
    link: "/Teens",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const {handleCartClick} = useShoppingCart()
  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href={"/"} className="text-3xl font-bold">
          <h1 className="text-3xl font-bold">
            Next <span className="text-primary">Ecommerce</span>
          </h1>
        </Link>
        <nav className="hidden gap-12 lg:flex  items-center 2xl:ml-16">
          {Links.map((link, idx) => (
            <div key={idx}  className="text-lg font-medium">
              {
                pathname === link.link ? (
                    <Link href={link.link} className="text-lg font-semibold text-primary">
                      {link.name}
                    </Link>
                ) : (
                    <Link href={link.link} className="text-lg font-semibold text-gray-600 transition-all duration-100 hover:text-primary" >{link.name}</Link>
                )
              }
            </div>
          ))}
        </nav>
          <div className="flex divide-x border-r sm:border-l">
            <Button onClick={() => handleCartClick()} className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 md:h-24 md:w-24 rounded-none" variant={"outline"}>
                <ShoppingBag />
                <span className="hidden text-xs font-semibold text-gray-500 sm:block ">Cart</span>
            </Button>
          </div>
      </div>
    </header>
  );
};

export default Navbar;
