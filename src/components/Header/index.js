"use client";
import React from "react";
import LOGO from "@/public/Images/Icons/logo.png";
import USERICON from "@/public/Images/Icons/user.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Header = () => {
  const router = useRouter();


  return (
    <div className="bg-primary fixed w-full p-4 flex items-center justify-between">
      <span className="flex items-center gap-4">
        <Image src={LOGO} alt="Game App" className="w-10 h-10" />
        <h1 className="text-white text-2xl font-semibold">Game App</h1>
      </span>
      <Link
        href="/login"
        className="flex items-center gap-2 border border-gray-500 rounded-lg py-2 px-4"
        onClick={() => {}}
      >
        <Image src={USERICON} alt="Game App" className="w-6 h-6" />
        <h3 className="text-white text-xl font-semibold">Login</h3>
      </Link>
    </div>
  );
};

export default Header;
