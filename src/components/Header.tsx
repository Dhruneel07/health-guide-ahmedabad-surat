
import React from 'react';
import { Hospital, User, Book } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600 mb-4 sm:mb-0">DocWise</h1>
          <Tabs defaultValue="hospitals" className="w-full sm:w-[400px]">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="hospitals" className="flex items-center gap-2">
                <Hospital className="h-4 w-4" />
                Hospitals
              </TabsTrigger>
              <TabsTrigger value="doctors" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Doctors
              </TabsTrigger>
              <TabsTrigger value="diseases" className="flex items-center gap-2">
                <Book className="h-4 w-4" />
                Diseases
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </header>
  );
};

export default Header;
