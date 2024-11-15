import { UserButton } from "@clerk/nextjs";
import React from "react";

const Header = () => {
  return (
    <div className="p-5 shadow-sm">
      <div className="flex justify-end">
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
