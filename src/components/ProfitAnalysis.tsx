import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, ComposedChart, Line
} from 'recharts';
import { DollarSign, TrendingUp, AlertCircle, Percent } from 'lucide-react';

const profitData = [
  { category: '食品容器', sales: 450000, procurement: 120000, logistics: 65000, commission: 67500, adSpend: 25000, storage: 15000, returnLoss: 8000, profit: 149500 },
  { category: '收纳盒/箱', sales: 680000, procurement: 190000, logistics: 95000, commission: 102000, adSpend: 45000, storage: 22000, returnLoss: 12000, profit: 214000 },
  { category: '抽屉收纳系列', sales: 520000, procurement: 145000, logistics: 78000, commission: 78000, adSpend: 38000, storage: 18000, returnLoss: 9500, profit: 153500 },
  { category: '抽屉式收纳系列', sales: 490000, procurement: 135000, logistics: 72000, commission: 73500, adSpend: 32000, storage: 16000, returnLoss: 8500, profit: 153000 },
  { category: '化妆收纳品类', sales: 380000, procurement: 95000, logistics: 52000, commission: 57000, adSpend: 45000, storage: 12000, returnLoss: 6000, profit: 113000 },
];

const costBreakdown = [
  { name: '采购成本', value: 685000 },
  { name: '物流费用', value: 362000 },
  { name: '平台佣金', value: 378000 },
  { name: '广告花费', value: 185000 },
  { name: '仓储费', value: 83000 },
  { name: '退货损失', value: 44000 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

const kpis = [
  { title: '总销售额', value: '¥2,520,000', icon: DollarSign, color: 'text-blue-600', bg: 'bg-blue-50' },
  { title: '总净利润', value: '¥783,000', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50' },
  { title: '整体净利率', value: '31.1%', icon: Percent, color: 'text-purple-600', bg: 'bg-purple-50' },
  { title: '退货损失金额', value: '¥44,000', icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50' },
];

export default function ProfitAnalysis() {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-lg">
        <div className="text-xs text-blue-800">
          <span className="font-bold mr-2">【示例分析结论】</span>
          SKU001 销量高但利润率低，需要优化物流成本；SKU004 利润率最高，可以作为主推产品。
        </div>
        <div className="text-xs text-blue-600/80 mt-1">
          * 生产级看板可支持下钻分析
        </div>
      </div>

      <div className="bg-blue-600 text-white p-6 rounded-xl shadow-md flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold mb-2">核心利润公式</h2>
          <p className="text-blue-100 text-lg font-mono bg-blue-700/50 p-3 rounded-lg inline-block">
            利润 = 销售额 - 采购成本 - 物流 - 平台佣金 - 广告费 - 仓储费 - 退货损失
          </p>
        </div>
        <div className="mt-4 md:mt-0 text-right">
          <p className="text-blue-200 text-sm">本月净利润</p>
          <p className="text-4xl font-bold">¥783,000</p>
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">各品类利润结构分析</h3>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={profitData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="category" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} tickFormatter={(val) => `¥${val/10000}w`} />
                <Tooltip formatter={(value: number) => `¥${value.toLocaleString()}`} cursor={{fill: '#f9fafb'}} />
                <Legend />
                <Bar dataKey="profit" name="净利润" stackId="a" fill="#10b981" />
                <Bar dataKey="procurement" name="采购成本" stackId="a" fill="#3b82f6" />
                <Bar dataKey="logistics" name="物流费用" stackId="a" fill="#6366f1" />
                <Bar dataKey="commission" name="平台佣金" stackId="a" fill="#8b5cf6" />
                <Bar dataKey="adSpend" name="广告花费" stackId="a" fill="#f59e0b" />
                <Bar dataKey="storage" name="仓储费" stackId="a" fill="#64748b" />
                <Bar dataKey="returnLoss" name="退货损失" stackId="a" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">整体成本占比</h3>
          <div className="h-80 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={costBreakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                  label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {costBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => `¥${value.toLocaleString()}`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800">利润明细表</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-sm">
                <th className="p-4 font-medium">品类</th>
                <th className="p-4 font-medium text-right">销售额 (¥)</th>
                <th className="p-4 font-medium text-right">总成本 (¥)</th>
                <th className="p-4 font-medium text-right">净利润 (¥)</th>
                <th className="p-4 font-medium text-right">净利率</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {profitData.map((item, idx) => {
                const totalCost = item.procurement + item.logistics + item.commission + item.adSpend + item.storage + item.returnLoss;
                const margin = ((item.profit / item.sales) * 100).toFixed(1);
                return (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-gray-900 font-medium">{item.category}</td>
                    <td className="p-4 text-right text-gray-900">{item.sales.toLocaleString()}</td>
                    <td className="p-4 text-right text-red-600">{totalCost.toLocaleString()}</td>
                    <td className="p-4 text-right font-bold text-green-600">{item.profit.toLocaleString()}</td>
                    <td className="p-4 text-right font-medium text-blue-600">{margin}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
