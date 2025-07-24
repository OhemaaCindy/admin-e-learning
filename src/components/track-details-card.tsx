import type { Track } from "@/types/track.type";
import { Calendar, Pen, Trash2, User } from "lucide-react";

function TrackDetailsCard({ details }: { details: Track }) {
  return (
    <div className=" rounded-2xl shadow-lg overflow-hidden  w-2xl ">
      <div className=" relative overflow-hidden "></div>
      <img
        src={details?.image}
        alt="track image"
        className="h-80 w-full object-cover"
      />
      <div className="p-6 h-90">
        <h2 className="text-2xl font-bold text-gray-900 mb-5 ">
          {details?.name}
        </h2>

        <div className="flex justify-between items-center gap-3 mb-5">
          <div className="flex gap-3">
            <div className="flex items-center gap-3 text-gray-500">
              <Calendar size={18} />
              <span className="text-sm">{details?.duration}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-500">
              <User size={18} />
              <span className="text-sm">{details?.instructor}</span>
            </div>
          </div>

          <div className="text-xl font-semibold text-gray-900 ">
            {details?.price}
          </div>
        </div>

        {/* Tags */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex gap-3">
            <span className="px-4 py-1 bg-red-50 text-red-600 rounded-full text-sm font-medium border border-red-100">
              Figma
            </span>
            <span className="px-4 py-1 bg-pink-50 text-pink-600 rounded-full text-sm font-medium border border-pink-100">
              Sketch
            </span>
          </div>
          <div className="bg-[#FFF4ED] text-[#B93815] px-4 py-1 rounded-full">
            {details?.ratings}
          </div>
        </div>
        <p className="mb-5">{details?.description}</p>
        <div className="flex items-center justify-end gap-3">
          <div className="bg-[#f1f1e7] p-3 shadow-md">
            <Pen size={20} className="text-[#01589A] cursor-pointer " />
          </div>

          <div className="bg-[#f1f1e7] p-3 shadow-md">
            <Trash2 size={20} className="text-[#2E2C48] cursor-pointer " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackDetailsCard;
