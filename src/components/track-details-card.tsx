import { Calendar, User } from "lucide-react";
import { UpdateModal } from "./update-modal";
import UpdateTrackForm from "./update-track-form";
import { DeleteModal } from "./delete-modal";
import Deletetrack from "./delete-track";
import type { Track } from "@/types/track.type";
import { useState } from "react";

function TrackDetailsCard({ details }: { details: Track }) {
  const [openState, toogleState] = useState(false);

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
              {details?.courses.map((course) => (
                <div key={course._id}>{course?.title}</div>
              ))}
            </span>
          </div>
          <div className="bg-[#FFF4ED] text-[#B93815] px-4 py-1 rounded-full">
            {details?.ratings}
          </div>
        </div>
        <p className="mb-5">{details?.description}</p>
        <div className="flex items-center justify-end gap-3">
          <UpdateModal
            shadow
            title="Update Track"
            // openState={openState}
            // toogleState={toogleState}
          >
            <UpdateTrackForm closeModal={toogleState} />
          </UpdateModal>

          <DeleteModal title="Delete Track" shadow>
            <Deletetrack closeModal={toogleState} />
          </DeleteModal>
        </div>
      </div>
    </div>
  );
}

export default TrackDetailsCard;
