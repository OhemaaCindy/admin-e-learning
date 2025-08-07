import { singleLearner } from "@/services/learner-services";
import type { Learner } from "@/types/learners.type";
import { useQuery } from "@tanstack/react-query";
import { User } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

const LearnerProfile = ({ id }: { id: string }) => {
  const {
    data: learnerDetails,
    isLoading,
    error,
    isError,
  } = useQuery<Learner, Error>({
    queryKey: ["get-learner", id],
    queryFn: () => singleLearner(id),
  });

  return (
    <div>
      {isError && <span>{error.message}</span>}

      {isLoading ? (
        <LearnerSkeleton />
      ) : learnerDetails?.profileImage ? (
        <div className="flex items-center justify-center ">
          <img
            src={learnerDetails?.profileImage}
            alt="photo"
            className="w-50 h-50 rounded-full object-cover"
          />
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <User className="w-50 h-50 rounded-full text-gray-500 object-cover" />
        </div>
      )}

      <div className="flex items-center justify-center flex-col mt-3 mb-10">
        {isLoading ? (
          <LearnerSkeleton />
        ) : (
          <>
            <p className=" text-[#1F1F36] font-bold text-xl">
              {`${learnerDetails?.firstName} ${learnerDetails?.lastName}` ||
                "N/A"}
            </p>
            <p className="text-[#1F1F36] ">{learnerDetails?.email || "N/A"}</p>
          </>
        )}
      </div>
      <div className="flex flex-col w-ful px-8 py-9 rounded-2xl gap-4 shadow-sm">
        {isLoading ? (
          <LearnerSkeleton />
        ) : (
          <div className="flex justify-between">
            <p className="">Program</p>
            <p className="">{learnerDetails?.course || "N/A"}</p>
          </div>
        )}

        {isLoading ? (
          <LearnerSkeleton />
        ) : (
          <div className="flex justify-between">
            <p className="">Gender</p>
            <p className="">{learnerDetails?.gender || "N/A"}</p>
          </div>
        )}

        {isLoading ? (
          <LearnerSkeleton />
        ) : (
          <div className="flex justify-between">
            <p className="">Location</p>
            <p className="">{learnerDetails?.location || "N/A"}</p>
          </div>
        )}

        {isLoading ? (
          <LearnerSkeleton />
        ) : (
          <div className="flex justify-between ">
            <p className="">Paid</p>
            <p className="">{learnerDetails?.amount || "N/A"}</p>
          </div>
        )}

        {isLoading ? (
          <LearnerSkeleton />
        ) : (
          <div className="flex justify-between">
            <p className="">Bio</p>
            <p className="flex-wrap">{learnerDetails?.description || "N/A"}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearnerProfile;

const LearnerSkeleton = () => {
  return (
    <>
      <Skeleton className="   bg-amber-700" />
    </>
  );
};
