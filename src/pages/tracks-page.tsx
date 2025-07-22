import { SiteHeader } from "@/components/dashboard/site-header";
import { Plus, Search } from "lucide-react";

const Track = () => {
  return (
    <div>
      <SiteHeader
        title={"Manage Tracks "}
        description={"Filter, sort, and access detailed tracks"}
      />
      <div className="flex  items-center justify-between m-4">
        <div className="flex justify-start items-center  gap-2 p-2 rounded-md shadow-md w-80">
          <Search size={18} className="text-[#7F7E83]" />

          <input type="text" placeholder="Search Track" className="outline-0" />
        </div>
        <div className="flex justify-center items-center text-white bg-[#01589A]  px-4 py-2 gap-2 rounded-md cursor-pointer ">
          <Plus size={18} />
          <button className="cursor-pointer">Add Track</button>
        </div>
      </div>
    </div>
  );
};

export default Track;
