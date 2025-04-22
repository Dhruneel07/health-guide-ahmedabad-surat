
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin } from "lucide-react";

const hospitals = {
  ahmedabad: [
    { name: "Civil Hospital", address: "Asarwa, Ahmedabad", contact: "+91 79-22683721", specialities: "Multi-Specialty" },
    { name: "Sterling Hospital", address: "Sterling Hospital Road, Memnagar", contact: "+91 79-40011111", specialities: "Cardiac Care" },
    { name: "Apollo Hospital", address: "Near Bhat, Gandhinagar", contact: "+91 79-66701800", specialities: "Multi-Specialty" },
  ],
  surat: [
    { name: "New Civil Hospital", address: "Majura Gate, Surat", contact: "+91 261-2244456", specialities: "General Medicine" },
    { name: "BAPS Hospital", address: "Adajan, Surat", contact: "+91 261-2781000", specialities: "Multi-Specialty" },
    { name: "Kiran Hospital", address: "Katargam, Surat", contact: "+91 261-6694444", specialities: "Cardiac & Cancer Care" },
  ]
};

const HospitalSection = () => {
  const [selectedCity, setSelectedCity] = React.useState("ahmedabad");

  return (
    <div className="p-6">
      <div className="mb-6">
        <Select value={selectedCity} onValueChange={setSelectedCity}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select city" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
            <SelectItem value="surat">Surat</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hospitals[selectedCity as keyof typeof hospitals].map((hospital) => (
          <Card key={hospital.name} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{hospital.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-2 text-gray-600 mb-2">
                <MapPin className="h-4 w-4 mt-1" />
                <p>{hospital.address}</p>
              </div>
              <p className="text-sm text-gray-600">Contact: {hospital.contact}</p>
              <p className="text-sm text-blue-600 mt-2">{hospital.specialities}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HospitalSection;
