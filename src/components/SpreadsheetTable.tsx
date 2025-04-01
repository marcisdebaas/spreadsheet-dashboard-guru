
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
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Spreadsheet URL</TableHead>
            <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Client Name</TableHead>
            <TableHead className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">Last Updated</TableHead>
            <TableHead className="relative py-3.5 pl-3 pr-4">
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {spreadsheets.map((spreadsheet, idx) => (
            <TableRow 
              key={spreadsheet.id}
              className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
            >
              <TableCell className="whitespace-nowrap py-4 pl-4 pr-3 text-sm">
                <a 
                  href={spreadsheet.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-[#60C082] font-medium hover:text-[#4DA36A] hover:underline"
                >
                  <span className="truncate max-w-[260px]">{spreadsheet.url}</span>
                  <ExternalLink className="h-3.5 w-3.5 ml-1.5 flex-shrink-0" />
                </a>
              </TableCell>
              <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{spreadsheet.clientName}</TableCell>
              <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-right">
                {formatDistanceToNow(spreadsheet.lastUpdatedAt, { addSuffix: true })}
              </TableCell>
              <TableCell className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 text-gray-400 hover:text-red-600 hover:bg-red-50"
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
