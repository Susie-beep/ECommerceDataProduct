import { 
  ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { Target, MousePointerClick, Percent, DollarSign } from 'lucide-react';

const adData = [
  { category: '食品容器', spend: 25000, sales: 110000, roas: 4.4, cpc: 1.2, conv: 5.5 },
  { category: '收纳盒/箱', spend: 45000, sales: 185000, roas: 4.1, cpc: 1.5, conv: 4.8 },
  { category: '抽屉收纳系列', spend: 38000, sales: 140000, roas: 3.7, cpc: 1.8, conv: 3.9 },
  { category: '抽屉式收纳系列', spend: 32000, sales: 115000, roas: 3.6, cpc: 2.1, conv: 3.5 },
  { category: '化妆收纳品类', spend: 45000, sales: 210000, roas: 4.7, cpc: 1.4, conv: 6.2 },
];

const kpis = [
  { title: '总广告花费', value: '¥185,000', icon: DollarSign, color: 'text-blue-600', bg: 'bg-blue-50' },
  { title: '平均 ROAS', value: '4.1', icon: Target, color: 'text-green-600', bg: 'bg-green-50' },
  { title: '平均 CPC', value: '¥1.6', icon: MousePointerClick, color: 'text-purple-600', bg: 'bg-purple-50' },
  { title: '广告销售占比', value: '32.5%', icon: Percent, color: 'text-orange-600', bg: 'bg-orange-50' },
];

export default function AdAnalysis() {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-lg">
        <div className="text-xs text-blue-800">
          <span className="font-bold mr-2">【示例分析结论】</span>
          TikTok 广告 ROAS 高，但销售规模小，应增加预算测试。
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

      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">各品类广告花费与 ROAS 表现</h3>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={adData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
              <XAxis dataKey="category" axisLine={false} tickLine={false} />
              <YAxis yAxisId="left" axisLine={false} tickLine={false} tickFormatter={(val) => `¥${val/10000}w`} />
              <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} />
              <Tooltip formatter={(value: number, name: string) => name === 'ROAS' ? value : `¥${value.toLocaleString()}`} />
              <Legend />
              <Bar yAxisId="left" dataKey="spend" name="广告花费" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
              <Line yAxisId="right" type="monotone" dataKey="roas" name="ROAS" stroke="#f59e0b" strokeWidth={3} dot={{r: 6}} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800">广告投放明细 (按品类)</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-sm">
                <th className="p-4 font-medium">品类</th>
                <th className="p-4 font-medium text-right">广告花费 (¥)</th>
                <th className="p-4 font-medium text-right">广告带来销售 (¥)</th>
                <th className="p-4 font-medium text-right">ROAS</th>
                <th className="p-4 font-medium text-right">CPC (¥)</th>
                <th className="p-4 font-medium text-right">转化率</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {adData.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 text-gray-900 font-medium">{item.category}</td>
                  <td className="p-4 text-right text-gray-600">{item.spend.toLocaleString()}</td>
                  <td className="p-4 text-right text-blue-600 font-medium">{item.sales.toLocaleString()}</td>
                  <td className="p-4 text-right font-medium text-green-600">{item.roas}</td>
                  <td className="p-4 text-right text-gray-600">{item.cpc}</td>
                  <td className="p-4 text-right text-gray-600">{item.conv}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
