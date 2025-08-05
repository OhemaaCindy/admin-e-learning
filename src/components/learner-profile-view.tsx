import { singleLearner } from "@/services/learner-services";
import type { Learner } from "@/types/learners.type";
import { useQuery } from "@tanstack/react-query";

const LearnerProfile = ({ row }: { row: string }) => {
  // console.log("🚀 ~ LearnerProfile ~ row:", row);

  const {
    data: learnerDetails,
    isLoading,
    error,
    isError,
  } = useQuery<Learner, Error>({
    queryKey: ["get-learner", row],
    queryFn: (id) => singleLearner(row),
  });

  // let learnerDetails = data?. || {};
  return (
    <div>
      {isLoading && <span>Loading...</span>}
      {isError && <span>{error.message}</span>}
      <div className="flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1752046462544-9454fa2a13b2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D"
          alt="student picture"
          className="w-50 h-50 rounded-full"
        />
      </div>
      <div className="flex items-center justify-center flex-col mt-3 mb-10">
        <p className=" text-[#1F1F36] font-bold text-xl">
          {`${learnerDetails?.firstName} ${learnerDetails?.lastName}`}
        </p>
        <p className="text-[#1F1F36] ">{learnerDetails?.email}</p>
      </div>
      <div className="flex flex-col w-ful px-8 py-9 rounded-2xl gap-4 shadow-sm">
        <div className="flex justify-between">
          <p className="">Program</p>
          <p className="">Cloud Computing</p>
        </div>
        <div className="flex justify-between">
          <p className="">Gender</p>
          <p className="">Male</p>
        </div>
        <div className="flex justify-between ">
          <p className="">Contact</p>
          <p className="">{learnerDetails?.contact}</p>
        </div>
        <div className="flex justify-between">
          <p className="">Location</p>
          <p className="">Accra-Ghana</p>
        </div>
        <div className="flex justify-between ">
          <p className="">Paid</p>
          <p className="">$300</p>
        </div>
        <div className="flex justify-between">
          <p className="">Bio</p>
          <p className="flex-wrap">{learnerDetails?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default LearnerProfile;
