import { Bell, Search, User } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
}

const tabTitles: Record<string, string> = {
  'overview': '公司经营总览 (管理层)',
  'sales': '销售分析 (运营团队)',
  'ads': '广告投放分析 (投放团队)',
  'supply': '库存与供应链 (供应链团队)',
  'profit': '利润分析 (核心)',
  'brand': '品牌分析 (外部数据)',
  'data-model': '数据模型与指标体系',
  'factory-logistics': '工厂与物流分析 (生产与履约)',
};

export default function Header({ activeTab }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 shrink-0">
      <h2 className="text-xl font-semibold text-gray-800">
        {tabTitles[activeTab]}
      </h2>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="搜索 SKU, 订单..." 
            className="pl-10 pr-4 py-2 bg-gray-100 border-transparent rounded-full text-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none w-64"
          />
        </div>
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
          <User size={18} />
        </div>
      </div>
    </header>
  );
}
