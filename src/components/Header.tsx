
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn("border-b", className)}>
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdySLO9trHltRElnSEQ6dcCwQ1_lQV4aXJKA&s" 
            alt="Spreadsheet Dashboard Logo" 
            className="h-8 w-auto"
          />
          <h1 className="text-lg font-semibold">Spreadsheet Dashboard</h1>
        </div>
      </div>
    </header>
  );
}
