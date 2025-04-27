import { getServerSession } from "next-auth"; // <-- aqui está o import correto
import { redirect } from "next/navigation";
import LogoutBtn from "./LogoutBtn";
import Image from "next/image";

export default async function Page() {
  const session = await getServerSession();

  if (!session) {
    return redirect("/");
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {session.user?.image && (
        <Image
          src={session.user.image}
          alt="Foto de Perfil"
          width={100}
          height={100}
          className="rounded-full"
        />
      )}
      <h1 className="text-2xl font-bold">Olá, {session.user?.name}</h1>
      <h2 className="text-lg">Email: {session.user?.email}</h2>

      <LogoutBtn />
    </div>
  );
}
