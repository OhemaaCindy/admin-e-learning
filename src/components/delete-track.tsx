import { useDeleteTrack } from "@/hooks/add-track.hook";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";

const Deletetrack = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  console.log("🚀 ~ Delete TrackForm ~ id:", id);

  const { mutate: handleDeleteTrack, isError, error } = useDeleteTrack();
  const handleDelete = (id: string) => {
    handleDeleteTrack(id, {
      onSuccess: () => {
        toast.success("Track Deleted sucessfully");

        navigate("/tracks");
      },
      onError: (error: any) => {
        toast.error(error.message);
        console.log(error);
      },
    });
  };

  return (
    <div>
      {isError && error && (
        <ul className="text-rose-500 mt-2 bg-rose-100 border border-rose-500 rounded-lg px-8 py-2 list-disc">
          {error.errors.map((err, index) => (
            <li key={index}>{err.message}</li>
          ))}
        </ul>
      )}
      <p>Are you sure you want to delete the track?</p>
      <div className="flex justify-end items-center gap-2 mt-4 ">
        <button className="border-1 py-1 px-2 rounded-md cursor-pointer">
          Cancel
        </button>

        <button
          className="py-1 px-2 bg-[red] text-white rounded-md cursor-pointer"
          onClick={() => handleDelete(id as string)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Deletetrack;
