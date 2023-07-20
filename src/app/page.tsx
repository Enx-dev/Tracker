import Image from "next/image";
import AuthButton from "@/app/components/Button/AuthButton";
import { Button } from "@/app/components/ui/button";
import { AppBar, Blob, NewsLetter } from "@/app/components";
import blobData from "@/app/components/Blob/data/index.json";
import { prisma } from "@/app/lib/db";

export default async function Home() {
  const deleteAllTasks = async () => {
    await prisma.tasks.deleteMany();
  };
  deleteAllTasks();
  return (
    <main className="min-h-screen">
      <AppBar />
      <div className="container grid h-screen place-content-center place-items-center relative">
        {blobData.map((blob, index) => (
          <Blob key={index} {...blob} />
        ))}
        <div className="relative">
          <p>Tracker</p>
          <p>The Most Simple Advanced TODO Out There</p>
          <NewsLetter />
        </div>
      </div>
    </main>
  );
}
