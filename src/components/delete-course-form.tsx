import { useDeleteCourse } from "@/hooks/course-hook";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

interface DeleteCourseFormProps {
  closeModal: (state: boolean) => void;
  id: string;
}
const DeleteCourseForm = ({ closeModal, id }: DeleteCourseFormProps) => {
  // console.log("🚀 ~ DeleteCourseForm ~ id:", id);
  // const [closeModal] = useState<null>(null);

  const navigate = useNavigate();
  // const params = useParams();
  // const id = params.id;
  // console.log("🚀 ~ Delete TrackForm ~ id:", id);

  const { mutate: handleDeleteCourse, isError, error } = useDeleteCourse();
  const handleDelete = (id: string) => {
    handleDeleteCourse(id, {
      onSuccess: () => {
        toast.success("Course Deleted sucessfully");

        navigate("/courses");
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
      <p>Are you sure you want to delete the course?</p>
      <div className="flex justify-end items-center gap-2 mt-4 ">
        <button
          className="border-1 py-1 px-2 rounded-md cursor-pointer"
          // onClick={handleCloseModal}
          onClick={() => closeModal(false)}
        >
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

export default DeleteCourseForm;
