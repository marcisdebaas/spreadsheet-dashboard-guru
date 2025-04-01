
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Spreadsheet } from "@/types";
import { Plus, FilePlus2 } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface SpreadsheetFormProps {
  onAddSpreadsheet: (spreadsheet: Omit<Spreadsheet, "id" | "lastUpdatedAt">) => void;
}

export function SpreadsheetForm({ onAddSpreadsheet }: SpreadsheetFormProps) {
  const [url, setUrl] = useState("");
  const [clientName, setClientName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
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
    });

    // Clear the form
    setUrl("");
    setClientName("");
    setIsOpen(false);
    
    toast({
      title: "Success",
      description: "Spreadsheet added successfully",
    });
  };

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="border rounded-lg shadow-md bg-white overflow-hidden"
    >
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600">
        <CollapsibleTrigger asChild>
          <Button 
            variant="ghost" 
            className="w-full p-4 text-white hover:bg-blue-600/20 flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <FilePlus2 className="h-5 w-5" />
              <span className="font-medium text-sm">Add New Spreadsheet</span>
            </div>
            <Plus className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`} />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <form onSubmit={handleSubmit} className="space-y-4 p-5">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="url" className="text-sm font-medium">Spreadsheet URL</Label>
              <Input
                id="url"
                placeholder="https://docs.google.com/spreadsheets/d/..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="clientName" className="text-sm font-medium">Client Name</Label>
              <Input
                id="clientName"
                placeholder="Client Name"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            Add Spreadsheet
          </Button>
        </form>
      </CollapsibleContent>
    </Collapsible>
  );
}
