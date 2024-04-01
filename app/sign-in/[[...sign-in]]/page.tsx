import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="w-screen min-h-screen bg-black flex justify-center items-center text-white">
      <SignIn />
    </div>
  );
};

export default SignInPage;
