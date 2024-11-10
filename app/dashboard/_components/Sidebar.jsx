import Image from "next/image";
import React from "react";
import { Button } from "../../../components/ui/button";
import { Layout } from "lucide-react";
import { Shield } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { UploadPdfDailog } from "./UploadPdfDailog";
function SideBar() {
  return (
    <div className="shadow-md h-screen p-4">
      <div className="flex items-start justify-center flex-col w-full ">
        {" "}
        <Image src="/logo.svg" alt="logo" width={140} height={150} />
      </div>

      <div className="mt-8">
        <UploadPdfDailog>
          <Button className="w-full">+ Uplaod PDF</Button>
        </UploadPdfDailog>

        <div className="flex gap-2 items-center p-3 mt-5 hover:bg-slate-200 cursor-pointer rounded">
          <Layout />
          <h2>WorkSpace</h2>
        </div>
        <div className="flex gap-2 items-center p-3 mt-1  hover:bg-slate-200 cursor-pointer rounded">
          <Shield />
          <h2>Upgrade</h2>
        </div>
      </div>
      <div className=" absolute w-[80%] bottom-14 ">
        <Progress value={33} />
        <p className="text-sm mt-3">2 out of 5 PDF Uploaded</p>
        <p className="text-sm  text-gray-500">Upgrade to Uplaod more PDF</p>
      </div>
    </div>
  );
}

export default SideBar;
