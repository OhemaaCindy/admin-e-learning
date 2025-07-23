import { Calendar, Pen, Trash2, User } from "lucide-react";
import { Link } from "react-router";

function TrackDetailsCard() {
  return (
    <div className="rounded-2xl shadow-lg overflow-hidden m-6  w-3xl ">
      <Link to="/tracks/:id">
        <div className=" relative h-90 bg-gradient-to-b from-blue-300 to-blue-100 overflow-hidden "></div>

        <div className="p-6 h-90">
          <h2 className="text-2xl font-bold text-gray-900 mb-5 ">UI/UX</h2>

          <div className="flex justify-between items-center gap-3 mb-5">
            <div className="flex gap-3">
              <div className="flex items-center gap-3 text-gray-500">
                <Calendar size={18} />
                <span className="text-sm">8 weeks</span>
              </div>
              <div className="flex items-center gap-3 text-gray-500">
                <User size={18} />
                <span className="text-sm">Doe</span>
              </div>
            </div>

            <div className="text-xl font-semibold text-gray-900 ">$400</div>
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
              4.9/5
            </div>
          </div>
          <p className="mb-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            numquam repudiandae accusamus esse tenetur, error nihil debitis,
            quibusdam voluptate vitae aspernatur suscipit officiis fuga quaerat
            architecto ut at explicabo dicta?
          </p>
          <div className="flex items-center justify-end gap-3">
            <div className="bg-[#f1f1e7] p-3 shadow-md">
              <Pen size={20} className="text-[#01589A] cursor-pointer " />
            </div>

            <div className="bg-[#f1f1e7] p-3 shadow-md">
              <Trash2 size={20} className="text-[#2E2C48] cursor-pointer " />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default TrackDetailsCard;
