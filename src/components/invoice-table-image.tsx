interface details {
  profilePhoto: string;
}

const InvoiceImage = ({ profilePhoto }: details) => {
  return (
    <div className="flex items-center gap-3">
      <img
        src={profilePhoto}
        alt="fullName"
        className="w-12 h-12 rounded-full object-cover"
      />
      <span className="font-medium text-sm">fullName</span>
    </div>
  );
};

export default InvoiceImage;
