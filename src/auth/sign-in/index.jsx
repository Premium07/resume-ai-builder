import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <section className="w-screen h-screen flex items-center justify-center antialiased">
      <SignIn />
    </section>
  );
};

export default SignInPage;
