import { auth } from "@clerk/nextjs";
import { prisma } from "./db";

import { User } from "@prisma/client";

interface UserInclude {
  journal: boolean;
}
type UserKeys = keyof User;
type UserSelect = {
  [key in UserKeys]?: boolean;
};

const getUserByClerkId = async () => {
  const { userId: clerkUserId } = await auth();

  if (!clerkUserId) {
    throw new Error("Not logged in");
  }

  const user = prisma.user.findUnique({
    where: { clerkId: clerkUserId },
  });

  if (!user) {
    throw new Error("No user found");
  }

  return user;
};

export { getUserByClerkId };
