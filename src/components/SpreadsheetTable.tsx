
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Spreadsheet } from "@/types";
import { formatDistanceToNow } from "date-fns";
import { ExternalLink } from "lucide-react";

interface SpreadsheetTableProps {
  spreadsheets: Spreadsheet[];
}

export function SpreadsheetTable({ spreadsheets }: SpreadsheetTableProps) {
  return (
    <div className="rounded-lg border shadow-md overflow-hidden bg-white">
      <Table>
        <TableHeader className="bg-gray-50">
          <TableRow>
            <TableHead className="w-[300px] font-semibold">Spreadsheet URL</TableHead>
            <TableHead className="font-semibold">Client Name</TableHead>
            <TableHead className="text-right font-semibold">Last Updated</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {spreadsheets.map((spreadsheet) => (
            <TableRow 
              key={spreadsheet.id}
              className="hover:bg-blue-50 transition-colors duration-200"
            >
              <TableCell className="font-medium">
                <a 
                  href={spreadsheet.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline truncate inline-block max-w-[260px] flex items-center gap-1"
                >
                  {spreadsheet.url}
                  <ExternalLink className="h-3.5 w-3.5 inline ml-1 opacity-70" />
                </a>
              </TableCell>
              <TableCell className="font-medium">{spreadsheet.clientName}</TableCell>
              <TableCell className="text-right text-gray-600">
                {formatDistanceToNow(spreadsheet.lastUpdatedAt, { addSuffix: true })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
