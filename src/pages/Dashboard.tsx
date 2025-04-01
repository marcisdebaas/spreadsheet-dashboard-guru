
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
      lastUpdatedBy: "John Doe",
      lastUpdatedAt: new Date(2023, 6, 15),
    },
    {
      id: "2",
      url: "https://docs.google.com/spreadsheets/d/5e4d3c2b1a",
      clientName: "XYZ Corp",
      lastUpdatedBy: "Jane Smith",
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
      <main className="flex-1 container max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-[300px_1fr] lg:grid-cols-[350px_1fr]">
          <div className="space-y-6">
            <SpreadsheetForm onAddSpreadsheet={handleAddSpreadsheet} />
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Your Spreadsheets</h2>
            {spreadsheets.length > 0 ? (
              <SpreadsheetTable spreadsheets={spreadsheets} />
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
