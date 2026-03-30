import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, AreaChart, Area
} from 'recharts';
import { ArrowUpRight, ArrowDownRight, DollarSign, TrendingUp, Package, AlertCircle } from 'lucide-react';

const categoryData = [
  { name: '食品容器', gmv: 450000, profit: 120000, roi: 3.2 },
  { name: '收纳盒/箱', gmv: 680000, profit: 180000, roi: 4.1 },
  { name: '抽屉收纳系列', gmv: 520000, profit: 145000, roi: 3.8 },
  { name: '抽屉式收纳系列', gmv: 490000, profit: 130000, roi: 3.5 },
  { name: '化妆收纳品类', gmv: 380000, profit: 110000, roi: 4.5 },
];

const trendData = [
  { month: '1月', gmv: 2100000, profit: 580000 },
  { month: '2月', gmv: 2300000, profit: 620000 },
  { month: '3月', gmv: 2520000, profit: 685000 },
];

const kpis = [
  { title: '总 GMV', value: '¥2,520,000', change: '+9.5%', isUp: true, icon: DollarSign },
  { title: '净利润 (Profit)', value: '¥685,000', change: '+10.4%', isUp: true, icon: TrendingUp },
  { title: '广告花费', value: '¥185,000', change: '+5.2%', isUp: false, icon: DollarSign },
  { title: '整体 ROI', value: '3.8', change: '+0.2', isUp: true, icon: TrendingUp },
  { title: '库存周转天数', value: '42 天', change: '-3 天', isUp: true, icon: Package },
  { title: '缺货率', value: '2.4%', change: '-0.5%', isUp: true, icon: AlertCircle },
  { title: '退货率', value: '4.1%', change: '+0.2%', isUp: false, icon: AlertCircle },
];

export default function Overview() {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-lg">
        <div className="text-xs text-blue-800">
          <span className="font-bold mr-2">【示例分析结论】</span>
          Walmart 平台退货率最高，需要优化产品描述或质量。
        </div>
        <div className="text-xs text-blue-600/80 mt-1">
          * 生产级看板可支持下钻分析
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, idx) => (
          <div key={idx} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">{kpi.title}</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">{kpi.value}</h3>
              </div>
              <div className={`p-2 rounded-lg ${kpi.isUp ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                <kpi.icon size={20} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className={`flex items-center font-medium ${kpi.isUp ? 'text-green-600' : 'text-red-600'}`}>
                {kpi.isUp ? <ArrowUpRight size={16} className="mr-1" /> : <ArrowDownRight size={16} className="mr-1" />}
                {kpi.change}
              </span>
              <span className="text-gray-400 ml-2">较上月</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Trend Chart */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">GMV 与利润趋势</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData}>
                <defs>
                  <linearGradient id="colorGmv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis yAxisId="left" axisLine={false} tickLine={false} tickFormatter={(val) => `¥${val/10000}w`} />
                <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tickFormatter={(val) => `¥${val/10000}w`} />
                <Tooltip formatter={(value: number) => `¥${value.toLocaleString()}`} />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="gmv" name="GMV" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorGmv)" />
                <Area yAxisId="right" type="monotone" dataKey="profit" name="利润" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorProfit)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Performance */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">各品类 GMV 贡献</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData} layout="vertical" margin={{ left: 40 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f3f4f6" />
                <XAxis type="number" axisLine={false} tickLine={false} tickFormatter={(val) => `¥${val/10000}w`} />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} width={100} />
                <Tooltip formatter={(value: number) => `¥${value.toLocaleString()}`} />
                <Legend />
                <Bar dataKey="gmv" name="GMV" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={20} />
                <Bar dataKey="profit" name="利润" fill="#10b981" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
