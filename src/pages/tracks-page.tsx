import { SiteHeader } from "@/components/dashboard/site-header";
import TrackCard from "@/components/track-card";
// import TrackCard from "@/components/trackCard";
import { Plus, Search } from "lucide-react";

const Track = () => {
  // const tracks = [
  //   {
  //     title: "Software Engineering",
  //     duration: "12 weeks",
  //     price: 400,
  //     image: "/api/placeholder/280/128",
  //     tags: ["Node.js", "React.js"],
  //     gradient: "bg-gradient-to-br from-teal-400 to-cyan-500",
  //   },
  //   {
  //     title: "Cloud Computing",
  //     duration: "12 weeks",
  //     price: 350,
  //     image: "/api/placeholder/280/128",
  //     tags: ["Azure", "AWS"],
  //     gradient: "bg-gradient-to-br from-orange-400 to-red-500",
  //   },
  //   {
  //     title: "Data Science",
  //     duration: "12 weeks",
  //     price: 400,
  //     image: "/api/placeholder/280/128",
  //     tags: ["PowerBI", "Python"],
  //     gradient: "bg-gradient-to-br from-purple-500 to-indigo-600",
  //   },
  //   {
  //     title: "UI/UX",
  //     duration: "8 weeks",
  //     price: 250,
  //     image: "/api/placeholder/280/128",
  //     tags: ["Figma", "Sketch"],
  //     gradient: "bg-gradient-to-br from-blue-400 to-cyan-500",
  //   },
  // ];
  return (
    <div>
      <SiteHeader
        title={"Manage Tracks "}
        description={"Filter, sort, and access detailed tracks"}
      />
      <div className="flex  items-center justify-between mb-8 p-6">
        <div className="flex justify-start items-center  gap-2 p-2 rounded-md shadow-md w-80">
          <Search size={18} className="text-[#7F7E83]" />

          <input type="text" placeholder="Search Track" className="outline-0" />
        </div>
        <div className="flex justify-center items-center text-white bg-[#01589A]  px-4 py-2 gap-2 rounded-md cursor-pointer ">
          <Plus size={18} />
          <button className="cursor-pointer">Add Track</button>
        </div>
      </div>
      {/* {tracks.map((track, index) => ( */}
      <TrackCard />
      {/* ))} */}
    </div>
  );
};

export default Track;
