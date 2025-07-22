import { Calendar, User } from "lucide-react";

export default function TrackCard() {
  return (
    <div className="w-80  rounded-2xl shadow-lg overflow-hidden m-6">
      {/* Header with mountain landscape */}
      <div className="relative h-48 bg-gradient-to-b from-blue-300 to-blue-100 overflow-hidden ">
        {/* Price tag */}

        <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl px-3 py-1">
          <span className="text-gray-800 font-semibold text-md">$250</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-3">UI/UX</h2>

        {/* Description */}
        <p className="text-gray-600 text-base mb-6 leading-relaxed">
          Unlock your potential with comprehensive training in .....
        </p>

        {/* Course details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-gray-500">
            <Calendar size={18} />
            <span className="text-sm">8 weeks</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500">
            <User size={18} />
            <span className="text-sm">Doe</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex gap-3">
          <span className="px-4 py-1 bg-red-50 text-red-600 rounded-full text-sm font-medium border border-red-100">
            Figma
          </span>
          <span className="px-4 py-1 bg-pink-50 text-pink-600 rounded-full text-sm font-medium border border-pink-100">
            Sketch
          </span>
        </div>
      </div>
    </div>
  );
}
