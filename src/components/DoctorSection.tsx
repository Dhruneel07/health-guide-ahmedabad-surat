
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
  const [selectedCity, setSelectedCity] = React.useState("ahmedabad");
  const [selectedSpeciality, setSelectedSpeciality] = React.useState("cardiologist");

  return (
    <div className="p-6">
      <div className="flex gap-4 mb-6">
        <Select value={selectedCity} onValueChange={setSelectedCity}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select city" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
            <SelectItem value="surat">Surat</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedSpeciality} onValueChange={setSelectedSpeciality}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select speciality" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cardiologist">Cardiologist</SelectItem>
            <SelectItem value="orthopedic">Orthopedic</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors[selectedCity as keyof typeof doctors][selectedSpeciality as keyof typeof doctors.ahmedabad].map((doctor) => (
          <Card key={doctor.name} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{doctor.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Experience: {doctor.experience}</p>
              <p className="text-sm text-gray-600">Hospital: {doctor.hospital}</p>
              <p className="text-sm text-blue-600 mt-2">Contact: {doctor.contact}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DoctorSection;
