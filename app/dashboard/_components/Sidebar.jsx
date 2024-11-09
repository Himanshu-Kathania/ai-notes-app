import Image from "next/image";
import React from "react";
const SideBar = () => {
  return (
    <div className="shadow-md h-screen p-5">
      <Image src="/logo.svg" alt="logo" width={150} height={150} />

      <div>
        <Button>hh</Button>
      </div>
    </div>
  );
};

export default SideBar;
