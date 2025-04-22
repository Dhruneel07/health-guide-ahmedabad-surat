
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Stethoscope, Heart, Brain, Tooth, Eye } from "lucide-react";

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
    neurologist: [
      { name: "Dr. Joshi", experience: "17 years", hospital: "Sterling Hospital", contact: "+91 98765-43214" },
      { name: "Dr. Trivedi", experience: "14 years", hospital: "Civil Hospital", contact: "+91 98765-43215" },
    ],
    dentist: [
      { name: "Dr. Sharma", experience: "10 years", hospital: "Dental Care Center", contact: "+91 98765-43216" },
      { name: "Dr. Patel", experience: "13 years", hospital: "Smile Dental Clinic", contact: "+91 98765-43217" },
    ],
    ophthalmologist: [
      { name: "Dr. Vyas", experience: "16 years", hospital: "Eye Care Hospital", contact: "+91 98765-43218" },
      { name: "Dr. Modi", experience: "19 years", hospital: "Vision Care Center", contact: "+91 98765-43219" },
    ],
  },
  surat: {
    cardiologist: [
      { name: "Dr. Kumar", experience: "14 years", hospital: "New Civil Hospital", contact: "+91 98765-43220" },
      { name: "Dr. Patel", experience: "16 years", hospital: "BAPS Hospital", contact: "+91 98765-43221" },
    ],
    orthopedic: [
      { name: "Dr. Singh", experience: "10 years", hospital: "Kiran Hospital", contact: "+91 98765-43222" },
      { name: "Dr. Shah", experience: "22 years", hospital: "New Civil Hospital", contact: "+91 98765-43223" },
    ],
    neurologist: [
      { name: "Dr. Desai", experience: "15 years", hospital: "BAPS Hospital", contact: "+91 98765-43224" },
      { name: "Dr. Patel", experience: "18 years", hospital: "Kiran Hospital", contact: "+91 98765-43225" },
    ],
    dentist: [
      { name: "Dr. Mehta", experience: "12 years", hospital: "Dental Excellence", contact: "+91 98765-43226" },
      { name: "Dr. Shah", experience: "9 years", hospital: "Perfect Smile Clinic", contact: "+91 98765-43227" },
    ],
    ophthalmologist: [
      { name: "Dr. Joshi", experience: "20 years", hospital: "Eye Institute", contact: "+91 98765-43228" },
      { name: "Dr. Trivedi", experience: "15 years", hospital: "Vision Plus Center", contact: "+91 98765-43229" },
    ],
  },
};

const DoctorSection = () => {
  const [selectedCity, setSelectedCity] = useState("ahmedabad");
  const [selectedSpeciality, setSelectedSpeciality] = useState("cardiologist");
  const [selectedDoctors, setSelectedDoctors] = useState<any[]>([]);

  // Update the selected doctors whenever city or speciality changes
  useEffect(() => {
    if (doctors[selectedCity as keyof typeof doctors] && 
        doctors[selectedCity as keyof typeof doctors][selectedSpeciality as keyof typeof doctors.ahmedabad]) {
      setSelectedDoctors(doctors[selectedCity as keyof typeof doctors][selectedSpeciality as keyof typeof doctors.ahmedabad]);
    } else {
      setSelectedDoctors([]);
    }
    
    console.log("Updated doctors:", selectedCity, selectedSpeciality, 
      doctors[selectedCity as keyof typeof doctors][selectedSpeciality as keyof typeof doctors.ahmedabad]);
  }, [selectedCity, selectedSpeciality]);

  const getSpecialityIcon = (speciality: string) => {
    switch (speciality) {
      case "cardiologist":
        return <Heart className="h-5 w-5 text-red-500" />;
      case "orthopedic":
        return <Stethoscope className="h-5 w-5 text-blue-500" />;
      case "neurologist":
        return <Brain className="h-5 w-5 text-purple-500" />;
      case "dentist":
        return <Tooth className="h-5 w-5 text-yellow-500" />;
      case "ophthalmologist":
        return <Eye className="h-5 w-5 text-green-500" />;
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
              <SelectItem value="neurologist">Neurologist</SelectItem>
              <SelectItem value="dentist">Dentist</SelectItem>
              <SelectItem value="ophthalmologist">Ophthalmologist</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedDoctors.length > 0 ? (
          selectedDoctors.map((doctor) => (
            <Card key={doctor.name + doctor.hospital} className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
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
          ))
        ) : (
          <div className="col-span-full text-center py-8 text-gray-500">
            No doctors found for the selected criteria
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorSection;
