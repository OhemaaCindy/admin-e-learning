import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Pen, X } from "lucide-react";

interface ModalProps {
  title: string;
  children: React.ReactNode;
}
export function UpdateModal({ title, children }: ModalProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="bg-[#fbfbf8] p-3 shadow-md">
          <Pen size={20} className="text-[#01589A] cursor-pointer " />
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className="flex justify-between ">
          <AlertDialogTitle className="font-bold">{title}</AlertDialogTitle>
          <AlertDialogCancel>
            <X color="red" />
          </AlertDialogCancel>
        </div>
        <AlertDialogHeader>{children}</AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
