import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react";

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

    <div className="border border-white/10 rounded-lg">
      <table className="w-full ">
        <thead>
          <tr className="border-b border-white/10">
            <th className="py-3 px-4 text-sm font-semibold text-left">
              <input type="checkbox" className="size-4 bg-black/20 rounded border-white/10" />
            </th>
            <th className="py-3 px-4 text-sm font-semibold text-left">Code</th>
            <th className="py-3 px-4 text-sm font-semibold text-left">Attendee</th>
            <th className="py-3 px-4 text-sm font-semibold text-left">Subscription date</th>
            <th className="py-3 px-4 text-sm font-semibold text-left">Check-in date</th>
            <th style={{ width: "48" }} className="py-3 px-4 text-sm font-semibold text-left"></th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, index) => 
            (
              <tr key={index} className="border-b border-white/10 hover:bg-white/5">
                <td className="py-3 px-4 text-sm text-zinc-300">
                  <input type="checkbox" className="size-4 bg-black/20 rounded border-white/10 checked" />
                </td>
                <td className="py-3 px-4 text-sm text-zinc-300">123456</td>
                <td className="py-3 px-4 text-sm text-zinc-300">
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">Jack Sparrow</span>
                    <span>jacksparrow@gmx.com</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm text-zinc-300">7 days ago</td>
                <td className="py-3 px-4 text-sm text-zinc-300">3 days ago</td>
                <td className="py-3 px-4 text-sm text-zinc-300">
                  <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                    <MoreHorizontal className="size-4 text-white" />
                  </button>
                </td>
              </tr>
            )
        )}
        </tbody>
        <tfoot>
          <tr>
            <td className="py-3 px-4 text-sm text-zinc-300" colSpan={3}>
              Show 10 of 228 items
            </td>
            <td className="py-3 px-4 text-sm text-zinc-300 text-right" colSpan={3}>
              <div className="inline-flex items-center gap-8">
                <span>Page 1 of 23</span>
                <div className="flex gap-1.5">
                <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                  <ChevronsLeft className="size-4 text-white" />
                </button>
                <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                  <ChevronLeft className="size-4 text-white" />
                </button>
                <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                  <ChevronRight className="size-4 text-white" />
                </button>
                <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                  <ChevronsRight className="size-4 text-white" />
                </button>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
   </div>
  );
} 