import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import { Outlet } from "react-router";

interface ModalProps {
  text: string;
  title: string;
  children: React.ReactNode;
  //   type?: string;
  //   placeholder?: string;
  //   register: any;
  //   error?: string;
  //   required?: boolean;
  //   inputStyles?: string;
}
export function AddModal({ text, title, children }: ModalProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="flex justify-center items-center text-white bg-[#01589A]  px-4 py-2 gap-2 rounded-md cursor-pointer w-fit">
          <Plus size={18} />
          <button className="cursor-pointer">{text}</button>
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
        {/* <AlertDialogFooter>
          <AlertDialogAction>Create Track</AlertDialogAction>
        </AlertDialogFooter> */}
      </AlertDialogContent>
    </AlertDialog>
  );
}
