
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn("border-b bg-white shadow-sm", className)}>
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#60C082]">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-6 w-6 text-white"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
              <polyline points="14 2 14 8 20 8"/>
              <path d="M8 13h2"/>
              <path d="M8 17h2"/>
              <path d="M14 13h2"/>
              <path d="M14 17h2"/>
            </svg>
          </div>
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">Spreadsheet Dashboard</h1>
        </div>
      </div>
    </header>
  );
}
