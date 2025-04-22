
import React from 'react';
import Header from '../components/Header';
import { Tabs, TabsContent } from "@/components/ui/tabs";
import HospitalSection from '../components/HospitalSection';
import DoctorSection from '../components/DoctorSection';
import DiseaseSection from '../components/DiseaseSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto">
        <Tabs defaultValue="hospitals">
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
