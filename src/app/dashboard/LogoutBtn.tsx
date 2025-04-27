"use client";

import { signOut } from "next-auth/react";

export default function LogoutBtn() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/", redirect: true })}
      className="flex gap-2 items-center border border-red-600 p-2 rounded-md text-red-600 hover:bg-red-100 transition-all cursor-pointer"
    >
      Logout
    </button>
  );
}