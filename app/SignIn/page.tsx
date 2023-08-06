"use client";

import Header from "@/components/Header";
import { useState } from "react";

export default function SignIn() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex min-h-max flex-col  justify-between ">
      <Header open={open} setOpen={setOpen} />
      <div className="flex flex-row">
        <button>Click to login to azure</button>
      </div>
    </div>
  );
}
