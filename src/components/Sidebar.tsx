import { 
  LayoutDashboard, 
  TrendingUp, 
  Megaphone, 
  Package, 
  DollarSign, 
  MessageSquare, 
  Database,
  Factory
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const navItems = [
    { id: 'data-model', label: '数据模型与指标', icon: Database },
    { id: 'overview', label: '经营总览', icon: LayoutDashboard },
    { id: 'sales', label: '销售分析', icon: TrendingUp },
    { id: 'ads', label: '广告投放', icon: Megaphone },
    { id: 'supply', label: '库存与供应链', icon: Package },
    { id: 'profit', label: '利润分析', icon: DollarSign },
    { id: 'brand', label: '品牌分析', icon: MessageSquare },
    { id: 'factory-logistics', label: '工厂与物流', icon: Factory },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-xl font-bold text-white tracking-tight">跨境电商数据中台</h1>
        <p className="text-xs text-slate-500 mt-1">经营分析看板设计</p>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-blue-600 text-white font-medium' 
                  : 'hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Icon size={20} className={isActive ? 'text-blue-200' : 'text-slate-400'} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
      <div className="p-4 border-t border-slate-800 text-xs text-slate-500">
        <p>数据更新时间:</p>
        <p className="font-mono mt-1">2026-03-29 07:30:00</p>
      </div>
    </aside>
  );
}
