
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
import { ExternalLink, Trash2 } from "lucide-react";
import { Button } from "./ui/button";

interface SpreadsheetTableProps {
  spreadsheets: Spreadsheet[];
  onDelete?: (id: string) => void;
}

export function SpreadsheetTable({ spreadsheets, onDelete }: SpreadsheetTableProps) {
  return (
    <div className="rounded-lg border shadow-md overflow-hidden bg-white">
      <Table>
        <TableHeader className="bg-[#F4F4F4]">
          <TableRow>
            <TableHead className="w-[300px] font-semibold">Spreadsheet URL</TableHead>
            <TableHead className="font-semibold">Client Name</TableHead>
            <TableHead className="text-right font-semibold">Last Updated</TableHead>
            <TableHead className="w-[80px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {spreadsheets.map((spreadsheet) => (
            <TableRow 
              key={spreadsheet.id}
              className="hover:bg-[#F4F4F4]/70 transition-colors duration-200"
            >
              <TableCell className="font-medium">
                <a 
                  href={spreadsheet.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#60C082] hover:text-[#4DA36A] hover:underline truncate inline-block max-w-[260px] flex items-center gap-1"
                >
                  {spreadsheet.url}
                  <ExternalLink className="h-3.5 w-3.5 inline ml-1 opacity-70" />
                </a>
              </TableCell>
              <TableCell className="font-medium">{spreadsheet.clientName}</TableCell>
              <TableCell className="text-right text-gray-600">
                {formatDistanceToNow(spreadsheet.lastUpdatedAt, { addSuffix: true })}
              </TableCell>
              <TableCell>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 text-gray-500 hover:text-red-500 hover:bg-red-50 transition-colors"
                  onClick={() => onDelete?.(spreadsheet.id)}
                  title="Delete spreadsheet"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
