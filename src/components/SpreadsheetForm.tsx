
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Spreadsheet } from "@/types";

interface SpreadsheetFormProps {
  onAddSpreadsheet: (spreadsheet: Omit<Spreadsheet, "id" | "lastUpdatedAt">) => void;
}

export function SpreadsheetForm({ onAddSpreadsheet }: SpreadsheetFormProps) {
  const [url, setUrl] = useState("");
  const [clientName, setClientName] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!url.trim()) {
      toast({
        title: "Error",
        description: "Please enter a spreadsheet URL",
        variant: "destructive",
      });
      return;
    }
    
    if (!clientName.trim()) {
      toast({
        title: "Error",
        description: "Please enter a client name",
        variant: "destructive",
      });
      return;
    }

    // Add the new spreadsheet
    onAddSpreadsheet({
      url,
      clientName,
      lastUpdatedBy: "Current User", // In a real app, this would be the current user's name
    });

    // Clear the form
    setUrl("");
    setClientName("");
    
    toast({
      title: "Success",
      description: "Spreadsheet added successfully",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded-lg border shadow-sm">
      <h2 className="text-lg font-medium">Add New Spreadsheet</h2>
      
      <div className="grid gap-3">
        <div className="grid gap-2">
          <Label htmlFor="url">Spreadsheet URL</Label>
          <Input
            id="url"
            placeholder="https://docs.google.com/spreadsheets/d/..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="clientName">Client Name</Label>
          <Input
            id="clientName"
            placeholder="Client Name"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
        </div>
      </div>
      
      <Button type="submit" className="w-full">Add Spreadsheet</Button>
    </form>
  );
}
