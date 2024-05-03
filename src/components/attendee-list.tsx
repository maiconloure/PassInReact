import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-headers";
import { TableCell } from "./table/table-cell";
import { TableRow } from "./table/table-row";

export function AttendeeList() {
  return (
   <div className="flex flex-col gap-4">
     <div className="flex gap-4 items-center">
      <h1 className="text-2xl font-bold">Attendees</h1>
      <div className="px-3 w-72  py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
        <Search className="size-4 text-emerald-300" />
        <input  className="bg-transparent flex-1 outline-none h-auto border-0 p-0 text-sm ring-0" placeholder="Search attendee..." />
      </div>
    </div>

      <Table>
        <thead>
          <tr className="border-b border-white/10">
            <TableHeader style={{ width: 48 }}>
              <input type="checkbox" className="size-4 bg-black/20 rounded border-white/10" />
            </TableHeader>
            <TableHeader>Code</TableHeader>
            <TableHeader>Attendee</TableHeader>
            <TableHeader>Subscription date</TableHeader>
            <TableHeader>Check-in date</TableHeader>
            <TableHeader style={{ width: "48" }} />
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, index) => 
            (
              <TableRow key={index} className="border-b border-white/10 hover:bg-white/5">
                <TableCell>
                  <input type="checkbox" className="size-4 bg-black/20 rounded border-white/10 checked" />
                </TableCell>
                <TableCell>123456</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">Jack Sparrow</span>
                    <span>jacksparrow@gmx.com</span>
                  </div>
                </TableCell>
                <TableCell>7 days ago</TableCell>
                <TableCell>3 days ago</TableCell>
                <TableCell>
                  <IconButton transparent>
                    <MoreHorizontal className="size-4" />
                  </IconButton>
                </TableCell>
              </TableRow>
            )
        )}
        </tbody>
        <tfoot>
          <tr>
            <TableCell colSpan={3}>
              Show 10 of 228 items
            </TableCell>
            <TableCell className="text-right" colSpan={3}>
              <div className="inline-flex items-center gap-8">
                <span>Page 1 of 23</span>
                <div className="flex gap-1.5">
                <IconButton>
                  <ChevronsLeft className="size-4" />
                </IconButton>
                <IconButton>
                  <ChevronLeft className="size-4" />
                </IconButton>
                <IconButton>
                  <ChevronRight className="size-4" />
                </IconButton>
                <IconButton>
                  <ChevronsRight className="size-4" />
                </IconButton>
                </div>
              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>
   </div>
  );
} 