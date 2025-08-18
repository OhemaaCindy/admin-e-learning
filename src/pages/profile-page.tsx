import UpdateProfileForm from "@/components/update-profile-form";
import React from "react";

const ProfilePage = () => {
  const [openState, toogleState] = React.useState(false);

  return (
    <div>
      <div className="flex flex-col  gap-1 px-4 lg:gap-2 lg:px-6 pt-4 ">
        <h1 className="font-bold text-xl">Manage Your Profile</h1>
        <p className="text-muted-foreground">Update your profile</p>
      </div>
      <div className="flex justify-center items-center mt-8">
        <UpdateProfileForm closeModal={toogleState} />
      </div>
    </div>
  );
};

export default ProfilePage;
