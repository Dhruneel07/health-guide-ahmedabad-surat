
import React, { useState } from 'react';
import Header from '../components/Header';
import { Tabs, TabsContent } from "@/components/ui/tabs";
import HospitalSection from '../components/HospitalSection';
import DoctorSection from '../components/DoctorSection';
import DiseaseSection from '../components/DiseaseSection';

const Index = () => {
  const [activeTab, setActiveTab] = useState("hospitals");
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsContent value="hospitals">
            <HospitalSection />
          </TabsContent>
          <TabsContent value="doctors">
            <DoctorSection />
          </TabsContent>
          <TabsContent value="diseases">
            <DiseaseSection />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
