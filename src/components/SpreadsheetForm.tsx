
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
      className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow"
    >
      <div className="bg-white border-b border-gray-200">
        <CollapsibleTrigger asChild>
          <Button 
            variant="ghost" 
            className="w-full p-4 text-gray-900 hover:bg-gray-50 flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-[#60C082]/10 p-1.5">
                <FilePlus2 className="h-5 w-5 text-[#60C082]" />
              </div>
              <span className="font-medium text-sm">Add New Spreadsheet</span>
            </div>
            <Plus className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`} />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <form onSubmit={handleSubmit} className="p-5 space-y-5">
          <div className="space-y-4">
            <div>
              <Label htmlFor="url" className="block text-sm font-medium text-gray-700">Spreadsheet URL</Label>
              <div className="mt-1.5">
                <Input
                  id="url"
                  placeholder="https://docs.google.com/spreadsheets/d/..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#60C082] focus:ring-[#60C082] sm:text-sm"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="clientName" className="block text-sm font-medium text-gray-700">Client Name</Label>
              <div className="mt-1.5">
                <Input
                  id="clientName"
                  placeholder="Client Name"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#60C082] focus:ring-[#60C082] sm:text-sm"
                />
              </div>
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-[#60C082] hover:bg-[#4DA36A] text-white"
          >
            Add Spreadsheet
          </Button>
        </form>
      </CollapsibleContent>
    </Collapsible>
  );
}
