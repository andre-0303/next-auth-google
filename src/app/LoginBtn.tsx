"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function LoginBtn() {
    return <button onClick={() => signIn('google', { callbackUrl: "/dashboard"})} className="flex gap-2 items-center border border-neutral-900 p-2 rounded-md cursor-pointer">
    <Image src="/g-icon.png" alt="Google Logo" width={24} height={24}/>
    Login com Google
  </button>
}