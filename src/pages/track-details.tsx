import { SiteHeader } from "@/components/dashboard/site-header";
import TrackDetailsCard from "@/components/track-details-card";
import { singleTrack } from "@/services/track-services";
import type { SingleTrackResponse } from "@/types/track.type";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

const TrackDetails = () => {
  const params = useParams();
  const id = params.id;
  console.log("🚀 ~ TrackDetails ~ id:", id);

  const { data, isLoading } = useQuery<SingleTrackResponse, Error>({
    queryKey: ["gert-single-track"],
    queryFn: () => singleTrack(id as string),
  });

  const details = data?.track || {};

  return (
    <div>
      <SiteHeader
        title={"Manage Tracks "}
        description={"Filter, sort, and access detailed tracks"}
      />
      <div className="flex justify-center bg-red-500 w-full">
        {isLoading && <div>Loading...</div>}
        {!isLoading && data && <TrackDetailsCard details={details} />}
      </div>
    </div>
  );
};

export default TrackDetails;
