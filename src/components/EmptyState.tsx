
import { FileSpreadsheet } from "lucide-react";

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="rounded-full bg-[#60C082]/20 p-3 mb-4">
        <FileSpreadsheet className="h-8 w-8 text-[#60C082]" />
      </div>
      <h3 className="text-lg font-medium mb-1">No spreadsheets yet</h3>
      <p className="text-muted-foreground">
        Add your first spreadsheet using the form above.
      </p>
    </div>
  );
}
