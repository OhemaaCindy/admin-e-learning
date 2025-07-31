import { AddModal } from "@/components/add-modal";
import AddTrackForm from "@/components/add-track-form";
import { SiteHeader } from "@/components/dashboard/site-header";
import { DataTableDemo } from "@/components/tables/invoice-table";
import { Search } from "lucide-react";

const Invoices = () => {
  return (
    <div>
      <SiteHeader
        title={"Manage invoices"}
        description={"Filter, sort, and access detailed invoices"}
      />
      <div className="flex  items-center justify-between mb-8 p-6  ">
        <div className="flex justify-start items-center  gap-2 p-2 rounded-md shadow-md w-80">
          <Search size={18} className="text-[#7F7E83]" />

          <input
            type="text"
            placeholder="Search Invoice"
            className="outline-0 w-full"
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <AddModal text="Add Invoice" title="Add New Track">
          <AddTrackForm />
        </AddModal>
      </div>
      <div className="px-6">
        <DataTableDemo />
      </div>
    </div>
  );
};

export default Invoices;
