import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { Factory, Truck, Clock, ShieldCheck } from 'lucide-react';

const productionData = [
  { month: '1月', capacity: 85, output: 82 },
  { month: '2月', capacity: 90, output: 85 },
  { month: '3月', capacity: 95, output: 92 },
  { month: '4月', capacity: 100, output: 98 },
];

const logisticsData = [
  { route: '美西海运', cost: 8.5, time: 25 },
  { route: '美东海运', cost: 11.2, time: 35 },
  { route: '欧洲空派', cost: 35.5, time: 10 },
  { route: '欧洲海派', cost: 14.0, time: 40 },
];

const kpis = [
  { title: '工厂产能利用率', value: '92%', icon: Factory, color: 'text-blue-600', bg: 'bg-blue-50' },
  { title: '平均生产交期', value: '22 天', icon: Clock, color: 'text-orange-600', bg: 'bg-orange-50' },
  { title: '头程物流均价', value: '¥12.5/kg', icon: Truck, color: 'text-green-600', bg: 'bg-green-50' },
  { title: '产品合格率', value: '99.2%', icon: ShieldCheck, color: 'text-purple-600', bg: 'bg-purple-50' },
];

export default function FactoryLogistics() {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-lg">
        <div className="text-xs text-blue-800">
          <span className="font-bold mr-2">【示例分析结论】</span>
          美东海运时效近期波动较大，建议部分急货转为美西海运+卡派；A工厂产能利用率已达98%，需提前规划下半年备用产能。
        </div>
        <div className="text-xs text-blue-600/80 mt-1">
          * 生产级看板可支持下钻分析
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, idx) => (
          <div key={idx} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center space-x-4">
            <div className={`p-3 rounded-lg ${kpi.bg} ${kpi.color}`}>
              <kpi.icon size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{kpi.title}</p>
              <h3 className="text-2xl font-bold text-gray-900">{kpi.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">工厂产能与实际产量趋势 (万件)</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={productionData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="capacity" name="规划产能" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" />
                <Line type="monotone" dataKey="output" name="实际产量" stroke="#3b82f6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">主要物流专线成本与时效</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={logisticsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="route" axisLine={false} tickLine={false} />
                <YAxis yAxisId="left" axisLine={false} tickLine={false} />
                <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="cost" name="单位成本 (¥/kg)" fill="#10b981" radius={[4, 4, 0, 0]} barSize={30} />
                <Bar yAxisId="right" dataKey="time" name="平均时效 (天)" fill="#f59e0b" radius={[4, 4, 0, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
