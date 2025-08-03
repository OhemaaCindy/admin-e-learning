const LearnerProfile = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1752046462544-9454fa2a13b2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D"
          alt="student picture"
          className="w-50 h-50 rounded-full"
        />
      </div>
      <div className="flex items-center justify-center flex-col mt-3 mb-10">
        <p className=" text-[#1F1F36] font-bold text-xl">James Anderson</p>
        <p className="text-[#1F1F36] ">james@gmail.com</p>
      </div>
      <div className="flex flex-col w-ful px-8 py-9 rounded-2xl gap-4 shadow-sm">
        <div className="flex justify-between">
          <p className="text-[#ABB3Bb] bg-[#F2F4F7] p-1 rounded-2xl text-lg">
            Program
          </p>
          <p className="text-[#1F1F36] font-semibold text-xl">
            Cloud Computing
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-[#ABB3Bb] bg-[#F2F4F7] p-1 rounded-2xl text-lg">
            Gender
          </p>
          <p className="text-[#1F1F36] font-semibold text-xl">Male</p>
        </div>
        <div className="flex justify-between ">
          <p className="text-[#ABB3Bb] bg-[#F2F4F7] p-1 rounded-2xl text-lg">
            Contact
          </p>
          <p className="text-[#1F1F36] font-semibold text-xl">+12334567585</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[#ABB3Bb] bg-[#F2F4F7] p-1 rounded-2xl text-lg">
            Location
          </p>
          <p className="text-[#1F1F36] font-semibold text-xl">Accra-Ghana</p>
        </div>
        <div className="flex justify-between ">
          <p className="text-[#ABB3Bb] bg-[#F2F4F7] p-1 rounded-2xl text-lg">
            Paid
          </p>
          <p className="text-[#1F1F36] font-semibold text-xl">$300</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[#ABB3Bb] bg-[#F2F4F7] p-1 rounded-2xl text-lg">
            Bio
          </p>
          <p className="text-[#1F1F36] font-semibold text-xl flex-wrap">
            Lorem Ipsum is simpl
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearnerProfile;
