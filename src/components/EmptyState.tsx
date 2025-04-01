
import { FileSpreadsheet } from "lucide-react";

export function EmptyState() {
  return (
    <div className="text-center rounded-lg border border-dashed border-gray-300 p-12">
      <div className="mx-auto h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
        <FileSpreadsheet className="h-6 w-6 text-gray-400" />
      </div>
      <h3 className="mt-4 text-sm font-medium text-gray-900">No spreadsheets yet</h3>
      <p className="mt-1 text-sm text-gray-500">
        Add your first spreadsheet using the form above.
      </p>
    </div>
  );
}
