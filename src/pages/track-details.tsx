import { SiteHeader } from "@/components/dashboard/site-header";
import TrackDetailsCard from "@/components/track-details-card";

const TrackDetails = () => {
  return (
    <div>
      <SiteHeader
        title={"Manage Tracks "}
        description={"Filter, sort, and access detailed tracks"}
      />
      <div className="flex justify-center ">
        <TrackDetailsCard />
      </div>
    </div>
  );
};

export default TrackDetails;
