import { auth,currentUser } from "@clerk/nextjs";
import Link from "next/link";

import { redirect } from "next/navigation";

import { prisma } from "~/utils/db";

// TODO: take user name and then create new user .
const createNewUser = async () => {
  const clerkUser = await currentUser();


  if (!clerkUser?.id || !clerkUser) {
    redirect("/sign-in");
    return ;
  }

  const user = await prisma.user.findUnique({
    where: { clerkId: clerkUser.id },
  });

  if (!user) {
    const newUser = await prisma.user.create({
      data: {
        clerkId: clerkUser.id,
        email: clerkUser?.emailAddresses[0].emailAddress,
      },
    });

    return newUser;
  }

  redirect("/journal");
};

export default async function Home() {
  const user = await createNewUser();

  return <div>....Loading</div>;
}
