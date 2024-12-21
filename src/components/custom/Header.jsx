import { UserButton } from "@clerk/clerk-react";

import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useUser } from "@clerk/clerk-react";

const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <header className="py-3 px-10 container mx-auto flex justify-between w-screen items-center shadow-md">
      <div className="flex items-center space-x-2">
        <img src="./logo.svg" alt="logo" className="w-10" />
        <span className="font-bold text-2xl">BuilderAI</span>
      </div>

      {isSignedIn ? (
        <div className="flex items-center space-x-4">
          <Link to={"/dashboard"}>
            <Button variant="outline">Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={"/auth/sign-in"}>
          <Button>Get Started</Button>
        </Link>
      )}
    </header>
  );
};

export default Header;
