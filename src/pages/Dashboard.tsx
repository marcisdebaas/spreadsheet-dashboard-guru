
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Header } from "@/components/Header";
import { SpreadsheetForm } from "@/components/SpreadsheetForm";
import { SpreadsheetTable } from "@/components/SpreadsheetTable";
import { EmptyState } from "@/components/EmptyState";
import { Spreadsheet } from "@/types";
import { useToast } from "@/hooks/use-toast";

export default function Dashboard() {
  const [spreadsheets, setSpreadsheets] = useState<Spreadsheet[]>([
    {
      id: "1",
      url: "https://docs.google.com/spreadsheets/d/1a2b3c4d5e",
      clientName: "Acme Inc.",
      lastUpdatedAt: new Date(2023, 6, 15),
    },
    {
      id: "2",
      url: "https://docs.google.com/spreadsheets/d/5e4d3c2b1a",
      clientName: "XYZ Corp",
      lastUpdatedAt: new Date(2023, 7, 20),
    },
  ]);

  const { toast } = useToast();

  const handleAddSpreadsheet = (spreadsheetData: Omit<Spreadsheet, "id" | "lastUpdatedAt">) => {
    const newSpreadsheet: Spreadsheet = {
      ...spreadsheetData,
      id: uuidv4(),
      lastUpdatedAt: new Date(),
    };
    
    setSpreadsheets([...spreadsheets, newSpreadsheet]);
  };

  const handleDeleteSpreadsheet = (id: string) => {
    setSpreadsheets(spreadsheets.filter((spreadsheet) => spreadsheet.id !== id));
    toast({
      title: "Spreadsheet deleted",
      description: "The spreadsheet has been removed from your dashboard.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container max-w-6xl py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-[300px_1fr] lg:grid-cols-[350px_1fr]">
          <div>
            <SpreadsheetForm onAddSpreadsheet={handleAddSpreadsheet} />
          </div>
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold leading-6 text-gray-900">Your Spreadsheets</h2>
              <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-200">
                {spreadsheets.length} {spreadsheets.length === 1 ? 'spreadsheet' : 'spreadsheets'}
              </span>
            </div>
            {spreadsheets.length > 0 ? (
              <SpreadsheetTable 
                spreadsheets={spreadsheets} 
                onDelete={handleDeleteSpreadsheet}
              />
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
      </main>
      <footer className="mt-auto bg-white border-t border-gray-200 py-6 text-center">
        <p className="text-sm text-gray-500">
          Spreadsheet Dashboard &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
