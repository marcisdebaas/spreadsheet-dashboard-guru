
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

interface SpreadsheetTableProps {
  spreadsheets: Spreadsheet[];
}

export function SpreadsheetTable({ spreadsheets }: SpreadsheetTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Spreadsheet URL</TableHead>
            <TableHead>Client Name</TableHead>
            <TableHead>Last Updated By</TableHead>
            <TableHead className="text-right">Last Updated</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {spreadsheets.map((spreadsheet) => (
            <TableRow key={spreadsheet.id}>
              <TableCell className="font-medium">
                <a 
                  href={spreadsheet.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline truncate inline-block max-w-[260px]"
                >
                  {spreadsheet.url}
                </a>
              </TableCell>
              <TableCell>{spreadsheet.clientName}</TableCell>
              <TableCell>{spreadsheet.lastUpdatedBy}</TableCell>
              <TableCell className="text-right">
                {formatDistanceToNow(spreadsheet.lastUpdatedAt, { addSuffix: true })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
