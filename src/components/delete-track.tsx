const Deletetrack = () => {
  return (
    <div>
      <p>Are you sure you want to delete the track?</p>
      <div className="flex justify-end items-center gap-2 mt-4 ">
        <button className="border-1 py-1 px-2 rounded-md cursor-pointer">
          Cancel
        </button>
        <button className="py-1 px-2 bg-[red] text-white rounded-md cursor-pointer">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Deletetrack;
