import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react";
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-headers";
import { TableCell } from "./table/table-cell";
import { TableRow } from "./table/table-row";
import { ChangeEvent, useState } from "react";
import { attendees } from "../data/attendee";

dayjs.extend(relativeTime)
dayjs.locale('en-US')

export function AttendeeList() {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const totalPage = Math.ceil(attendees.length / 10)

  function onSearchInputchanged(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  function goToNextPage() {
    setPage(page + 1)
  }

  function goToPreviousPage() {
    setPage(page - 1)
  }

  function goToFirstPage() {
    setPage(1)
  }

  function goToLastPage() {
    setPage(totalPage)
  }

  return (
   <div className="flex flex-col gap-4">
     <div className="flex gap-4 items-center">
      <h1 className="text-2xl font-bold">Attendees</h1>
      <div className="px-3 w-72  py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
        <Search className="size-4 text-emerald-300" />
        <input onChange={onSearchInputchanged} value={search} className="bg-transparent flex-1 outline-none h-auto border-0 p-0 text-sm ring-0" placeholder="Search attendee..." />
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
          {attendees.slice((page - 1) * 10, page * 10).map((attendee) => 
            (
              <TableRow key={attendee.id} className="border-b border-white/10 hover:bg-white/5">
                <TableCell>
                  <input type="checkbox" className="size-4 bg-black/20 rounded border-white/10 checked" />
                </TableCell>
                <TableCell>{attendee.id}</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">{attendee.name}</span>
                    <span>{attendee.email}</span>
                  </div>
                </TableCell>
                <TableCell>{dayjs(attendee.createdAt).fromNow()}</TableCell>
                <TableCell>{dayjs(attendee.checkedInAt).fromNow()}</TableCell>
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
              Show 10 of {attendees.length } items
            </TableCell>
            <TableCell className="text-right" colSpan={3}>
              <div className="inline-flex items-center gap-8">
                <span>Page {page} of {totalPage}</span>
                <div className="flex gap-1.5">
                <IconButton onClick={goToFirstPage} disabled={page === 1}>
                  <ChevronsLeft className="size-4" />
                </IconButton>
                <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                  <ChevronLeft className="size-4" />
                </IconButton>
                <IconButton onClick={goToNextPage} disabled={ page === totalPage}>
                  <ChevronRight className="size-4" />
                </IconButton>
                <IconButton onClick={goToLastPage} disabled={ page === totalPage}>
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