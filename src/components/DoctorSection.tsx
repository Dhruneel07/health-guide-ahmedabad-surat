
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Stethoscope, Heart, Hospital } from "lucide-react";

const doctors = {
  ahmedabad: {
    cardiologist: [
      { name: "Dr. Patel", experience: "15 years", hospital: "Civil Hospital", contact: "+91 98765-43210" },
      { name: "Dr. Shah", experience: "20 years", hospital: "Sterling Hospital", contact: "+91 98765-43211" },
    ],
    orthopedic: [
      { name: "Dr. Mehta", experience: "12 years", hospital: "Civil Hospital", contact: "+91 98765-43212" },
      { name: "Dr. Desai", experience: "18 years", hospital: "Apollo Hospital", contact: "+91 98765-43213" },
    ],
  },
  surat: {
    cardiologist: [
      { name: "Dr. Kumar", experience: "14 years", hospital: "New Civil Hospital", contact: "+91 98765-43214" },
      { name: "Dr. Patel", experience: "16 years", hospital: "BAPS Hospital", contact: "+91 98765-43215" },
    ],
    orthopedic: [
      { name: "Dr. Singh", experience: "10 years", hospital: "Kiran Hospital", contact: "+91 98765-43216" },
      { name: "Dr. Shah", experience: "22 years", hospital: "New Civil Hospital", contact: "+91 98765-43217" },
    ],
  },
};

const DoctorSection = () => {
  const [selectedCity, setSelectedCity] = useState("ahmedabad");
  const [selectedSpeciality, setSelectedSpeciality] = useState("cardiologist");

  const getSpecialityIcon = (speciality: string) => {
    switch (speciality) {
      case "cardiologist":
        return <Heart className="h-5 w-5 text-red-500" />;
      case "orthopedic":
        return <Stethoscope className="h-5 w-5 text-blue-500" />;
      default:
        return <Stethoscope className="h-5 w-5 text-blue-500" />;
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Find Doctors</h2>
        <p className="text-gray-600 mb-4">
          Search for specialists in your city to get the best healthcare.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="w-full sm:w-[180px]">
          <label className="block text-sm font-medium text-gray-700 mb-1">Select City</label>
          <Select value={selectedCity} onValueChange={setSelectedCity}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
              <SelectItem value="surat">Surat</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full sm:w-[180px]">
          <label className="block text-sm font-medium text-gray-700 mb-1">Select Speciality</label>
          <Select value={selectedSpeciality} onValueChange={setSelectedSpeciality}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select speciality" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cardiologist">Cardiologist</SelectItem>
              <SelectItem value="orthopedic">Orthopedic</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors[selectedCity as keyof typeof doctors][selectedSpeciality as keyof typeof doctors.ahmedabad].map((doctor) => (
          <Card key={doctor.name} className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                {getSpecialityIcon(selectedSpeciality)}
                <CardTitle className="text-lg">{doctor.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="font-medium">Experience:</span> {doctor.experience}
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <Hospital className="h-4 w-4 text-blue-500" />
                  <span className="font-medium">Hospital:</span> {doctor.hospital}
                </p>
                <p className="text-sm text-blue-600 mt-2 font-medium">Contact: {doctor.contact}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DoctorSection;
