import Link from "next/link";

import {auth} from '@clerk/nextjs';


export default async function  Home() {

  const {userId} = await auth();

  const redirectUrl = "/new-user";

  return (
    <div className="w-screen h-full bg-black flex justify-center items-center text-white px-3">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-2xl md:text-6xl mb-4">The best Journal app, period.</h1>
        <p className="text-xl md:text-2xl text-white/60 mb-4">
          This is the best app for tracking your mood through out your life. All
          you have to do is be honest.
        </p>
        <div>
          <Link href={redirectUrl}>
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
