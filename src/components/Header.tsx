
import { FileSpreadsheet } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn("border-b", className)}>
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <FileSpreadsheet className="h-6 w-6 text-blue-600" />
          <h1 className="text-lg font-semibold">Spreadsheet Dashboard</h1>
        </div>
      </div>
    </header>
  );
}
