
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Heart, Pills, Medicine } from "lucide-react";

const diseases = [
  {
    name: "Diabetes",
    symptoms: "Increased thirst, frequent urination, extreme hunger, fatigue",
    prevention: "Healthy diet, regular exercise, maintain healthy weight",
    medicines: "Metformin, Insulin, Sulfonylureas",
  },
  {
    name: "Hypertension",
    symptoms: "Headaches, shortness of breath, nosebleeds",
    prevention: "Low-salt diet, regular exercise, stress management",
    medicines: "ACE inhibitors, Beta blockers, Diuretics",
  },
  {
    name: "Asthma",
    symptoms: "Wheezing, chest tightness, shortness of breath, coughing",
    prevention: "Avoid triggers, regular check-ups, clean environment",
    medicines: "Inhaled corticosteroids, Bronchodilators",
  },
  {
    name: "Tuberculosis",
    symptoms: "Persistent cough, chest pain, fatigue, weight loss",
    prevention: "Vaccination, avoid close contact with infected persons",
    medicines: "Isoniazid, Rifampin, Ethambutol",
  },
  {
    name: "Malaria",
    symptoms: "Fever, chills, headache, nausea, body aches",
    prevention: "Use mosquito nets, insect repellent, antimalarial drugs",
    medicines: "Chloroquine, Artemisinin, Atovaquone",
  },
];

const DiseaseSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDiseases, setFilteredDiseases] = useState(diseases);

  useEffect(() => {
    const results = diseases.filter((disease) =>
      disease.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDiseases(results);
  }, [searchTerm]);

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Disease Information</h2>
        <p className="text-gray-600 mb-4">
          Learn about common diseases, their symptoms, prevention methods, and medicines.
        </p>
      </div>
      
      <div className="relative mb-6 max-w-md mx-auto">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
        <Input
          type="text"
          placeholder="Search diseases..."
          className="pl-8"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredDiseases.length === 0 ? (
        <div className="text-center text-gray-500 my-12">
          <p>No diseases found matching "{searchTerm}"</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDiseases.map((disease) => (
            <Card key={disease.name} className="hover:shadow-lg transition-shadow border-t-4 border-t-blue-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  {disease.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-blue-600 flex items-center gap-1">
                      <Medicine className="h-4 w-4" />
                      Symptoms:
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">{disease.symptoms}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-blue-600">Prevention:</h4>
                    <p className="text-sm text-gray-600 mt-1">{disease.prevention}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-blue-600 flex items-center gap-1">
                      <Pills className="h-4 w-4" />
                      Common Medicines:
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">{disease.medicines}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default DiseaseSection;
