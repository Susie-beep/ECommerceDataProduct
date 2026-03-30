import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Overview from './components/Overview';
import SalesAnalysis from './components/SalesAnalysis';
import AdAnalysis from './components/AdAnalysis';
import SupplyChain from './components/SupplyChain';
import ProfitAnalysis from './components/ProfitAnalysis';
import BrandAnalysis from './components/BrandAnalysis';
import DataModel from './components/DataModel';
import FactoryLogistics from './components/FactoryLogistics';

export default function App() {
  const [activeTab, setActiveTab] = useState('data-model');

  const renderContent = () => {
    switch (activeTab) {
      case 'data-model': return <DataModel />;
      case 'overview': return <Overview />;
      case 'sales': return <SalesAnalysis />;
      case 'ads': return <AdAnalysis />;
      case 'supply': return <SupplyChain />;
      case 'profit': return <ProfitAnalysis />;
      case 'brand': return <BrandAnalysis />;
      case 'factory-logistics': return <FactoryLogistics />;
      default: return <DataModel />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 font-sans">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header activeTab={activeTab} />
        <main className="flex-1 overflow-y-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
