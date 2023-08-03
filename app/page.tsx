"use client";
import Image from "next/image";
import Header from "@/components/Header";
import { use, useState } from "react";
import SideBar from "@/components/SideBar";
import EquifaxForm from "@/components/EquifaxForm";
import Link from "next/link";

export default function Home() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex min-h-max flex-col  justify-between ">
      <Header open={open} setOpen={setOpen} />
      <div className="flex flex-row">
        <SideBar open={open} />
        <div className="flex flex-col w-full bg-white p-4">
          <h2 className="text-4xl font-semibold text-black">
            Equifax Credit Check
          </h2>
          <EquifaxForm />
        </div>
      </div>
    </div>
  );
}
