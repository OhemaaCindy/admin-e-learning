"use client";

import * as React from "react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AddModal } from "@/components/add-modal";
import { UpdateModal } from "@/components/update-modal";
import { DeleteModal } from "@/components/delete-modal";
import AddCourseForm from "@/components/add-course-form";
import UpdateCourseForm from "@/components/update-course-form";
import DeleteCourseForm from "@/components/delete-course-form";
import { allCourses } from "@/services/courses-services";
import type { Course } from "@/types/courses.types";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import CourseTableShimmer from "@/components/course-table-shimmer";

export const columns: ColumnDef<Course>[] = [
  {
    header: "Courses",
    accessorKey: "title",
  },
  {
    header: "Tracks",
    accessorKey: "track",
    cell: ({ row }) => {
      const track = row.original.track;
      return <p>{track.name}</p>;
    },
  },

  {
    header: "Date Joined",
    accessorKey: "admin",
    cell: ({ row }) => {
      const admin = row.original.createdAt;
      return <p>{format(new Date(admin), "do MMMM, yyyy")}</p>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const [openState, toogleState] = React.useState(false);
      const [openUpdateState, toogleUpdateState] = React.useState(false);

      return (
        <div className="flex items-center justify-end gap-3">
          <UpdateModal
            title="Update Course"
            openState={openUpdateState}
            toogleState={toogleUpdateState}
          >
            <UpdateCourseForm
              id={row.original._id}
              closeModal={toogleUpdateState}
            />
          </UpdateModal>

          <DeleteModal
            title="Delete Course"
            openState={openState}
            toogleState={toogleState}
          >
            <DeleteCourseForm id={row.original._id} closeModal={toogleState} />
          </DeleteModal>
        </div>
      );
    },
  },
];

export function CoursesDataTable() {
  const [openState, toogleState] = React.useState(false);

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const { data: courseDetails, isLoading: isloadingCourseses } = useQuery<
    Course[],
    Error
  >({
    queryKey: ["get-all-courses"],
    queryFn: allCourses,
  });
  const info = courseDetails || [];

  const table = useReactTable({
    data: info,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full ">
      {/* {isloadingCourseses && <span>Loading....</span>} */}
      <div className="items-center py-4 flex justify-between">
        <Input
          placeholder="Search by course "
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <div className="">
          <AddModal
            text="Add Course"
            title="Add New Course"
            openState={openState}
            toogleState={toogleState}
          >
            <AddCourseForm closeModal={toogleState} />
          </AddModal>
        </div>
      </div>
      <div className="overflow-hidden rounded-md border">
        {isloadingCourseses ? (
          <CourseTableShimmer />
        ) : (
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
