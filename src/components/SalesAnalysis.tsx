import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

const platformData = [
  { name: 'Amazon US', sales: 1200000 },
  { name: 'Amazon EU', sales: 650000 },
  { name: 'Shopify 独立站', sales: 420000 },
  { name: 'Walmart', sales: 250000 },
];

const countryData = [
  { name: '美国', value: 1450000 },
  { name: '英国', value: 320000 },
  { name: '德国', value: 280000 },
  { name: '加拿大', value: 210000 },
  { name: '其他', value: 260000 },
];

const skuData = [
  { sku: 'SKU-BOX-001', category: '收纳盒/箱', sales: 125000, conversion: 4.2, aov: 120 },
  { sku: 'SKU-DRW-042', category: '抽屉式收纳系列', sales: 98000, conversion: 3.8, aov: 185 },
  { sku: 'SKU-FOOD-11', category: '食品容器', sales: 85000, conversion: 5.1, aov: 65 },
  { sku: 'SKU-MKP-008', category: '化妆收纳品类', sales: 72000, conversion: 4.5, aov: 140 },
  { sku: 'SKU-DRW-015', category: '抽屉收纳系列', sales: 68000, conversion: 3.2, aov: 95 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

export default function SalesAnalysis() {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-lg">
        <div className="text-xs text-blue-800">
          <span className="font-bold mr-2">【示例分析结论】</span>
          Amazon 平台贡献 60% 销售额，是核心渠道。
        </div>
        <div className="text-xs text-blue-600/80 mt-1">
          * 生产级看板可支持下钻分析
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Platform Sales */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">各平台销售额分布</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={platformData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} tickFormatter={(val) => `¥${val/10000}w`} />
                <Tooltip formatter={(value: number) => `¥${value.toLocaleString()}`} cursor={{fill: '#f9fafb'}} />
                <Bar dataKey="sales" name="销售额" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Country Sales */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">各国家销售占比</h3>
          <div className="h-72 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={countryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={2}
                  dataKey="value"
                  label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {countryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => `¥${value.toLocaleString()}`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* SKU Ranking Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800">Top SKU 销售排名</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-sm">
                <th className="p-4 font-medium">排名</th>
                <th className="p-4 font-medium">SKU</th>
                <th className="p-4 font-medium">所属品类</th>
                <th className="p-4 font-medium text-right">销售额 (¥)</th>
                <th className="p-4 font-medium text-right">转化率</th>
                <th className="p-4 font-medium text-right">客单价 (¥)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {skuData.map((sku, idx) => (
                <tr key={sku.sku} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 text-gray-900 font-medium">{idx + 1}</td>
                  <td className="p-4 text-blue-600 font-mono text-sm">{sku.sku}</td>
                  <td className="p-4 text-gray-600">{sku.category}</td>
                  <td className="p-4 text-right font-medium text-gray-900">{sku.sales.toLocaleString()}</td>
                  <td className="p-4 text-right text-gray-600">{sku.conversion}%</td>
                  <td className="p-4 text-right text-gray-600">{sku.aov}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
