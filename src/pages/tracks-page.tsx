import { SiteHeader } from "@/components/dashboard/site-header";
import TrackCard from "@/components/track-card";
import { allTracks } from "@/services/track-services";
import type { Error } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

import { Plus, Search } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Fragment } from "react/jsx-runtime";
import type { TrackResponse } from "@/types/track.type";

const Track = () => {
  const { data, isLoading, error, isError } = useQuery<TrackResponse, Error>({
    queryKey: ["get-all-tracks"],
    queryFn: allTracks,
  });

  const trackOverview = data?.tracks || [];

  return (
    <div className="w-full">
      <SiteHeader
        title={"Manage Tracks "}
        description={"Filter, sort, and access detailed tracks"}
      />
      <div className="flex  items-center justify-between mb-8 p-6  ">
        <div className="flex justify-start items-center  gap-2 p-2 rounded-md shadow-md w-80">
          <Search size={18} className="text-[#7F7E83]" />

          <input type="text" placeholder="Search Track" className="outline-0" />
        </div>
        <div className="flex justify-center items-center text-white bg-[#01589A]  px-4 py-2 gap-2 rounded-md cursor-pointer ">
          <Plus size={18} />
          <button className="cursor-pointer">Add Track</button>
        </div>
      </div>
      {isLoading && (
        <span>
          <DotLottieReact src="path/to/animation.lottie" loop autoplay />
        </span>
      )}
      {isError && <div>{error.message}</div>}

      <div className="p-8">
        <div className="grid w-full grid-cols-1 grid-rows-4 gap-6 sm:grid-cols-2 md:grid-cols-2 md:px-0 lg:grid-cols-3 xl:grid-cols-4">
          {trackOverview.map((track, index) => (
            <Fragment key={track._id + index}>
              <TrackCard track={track} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Track;
