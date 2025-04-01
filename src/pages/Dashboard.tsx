
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Header } from "@/components/Header";
import { SpreadsheetForm } from "@/components/SpreadsheetForm";
import { SpreadsheetTable } from "@/components/SpreadsheetTable";
import { EmptyState } from "@/components/EmptyState";
import { Spreadsheet } from "@/types";

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

  const handleAddSpreadsheet = (spreadsheetData: Omit<Spreadsheet, "id" | "lastUpdatedAt">) => {
    const newSpreadsheet: Spreadsheet = {
      ...spreadsheetData,
      id: uuidv4(),
      lastUpdatedAt: new Date(),
    };
    
    setSpreadsheets([...spreadsheets, newSpreadsheet]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[300px_1fr] lg:grid-cols-[350px_1fr]">
          <div>
            <SpreadsheetForm onAddSpreadsheet={handleAddSpreadsheet} />
          </div>
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">Your Spreadsheets</h2>
              <div className="text-sm text-gray-500">
                {spreadsheets.length} {spreadsheets.length === 1 ? 'spreadsheet' : 'spreadsheets'}
              </div>
            </div>
            {spreadsheets.length > 0 ? (
              <SpreadsheetTable spreadsheets={spreadsheets} />
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
      </main>
      <footer className="py-6 bg-white border-t text-center text-sm text-gray-500">
        Spreadsheet Dashboard &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
}
