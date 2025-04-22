
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

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
];

const DiseaseSection = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredDiseases = diseases.filter((disease) =>
    disease.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="relative mb-6">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
        <Input
          type="text"
          placeholder="Search diseases..."
          className="pl-8"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDiseases.map((disease) => (
          <Card key={disease.name} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{disease.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-blue-600">Symptoms:</h4>
                  <p className="text-sm text-gray-600">{disease.symptoms}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-blue-600">Prevention:</h4>
                  <p className="text-sm text-gray-600">{disease.prevention}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-blue-600">Common Medicines:</h4>
                  <p className="text-sm text-gray-600">{disease.medicines}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DiseaseSection;
