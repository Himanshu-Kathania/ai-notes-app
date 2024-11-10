import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";

export function UploadPdfDailog({ children }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Uplaod PDF File</DialogTitle>
          <DialogDescription asChild>
            <div className="mt-10">
              <div className="flex flex-col gap-2 p-3 rounded-md">
                <Label>Select a file to uplaod</Label>
                <Input type="file" accept="application/pdf" />
              </div>
              <div className="flex flex-col gap-2 p-3 rounded-md">
                <Label>Enter File Name</Label>
                <Input required type="text" />
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter asChild>
          <Button type="submit">Upload PDF</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
