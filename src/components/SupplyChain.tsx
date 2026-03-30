import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  ScatterChart, Scatter, ZAxis, Cell
} from 'recharts';
import { PackageSearch, AlertTriangle, Truck, Archive } from 'lucide-react';

const inventoryData = [
  { category: '食品容器', value: 350000, turnoverDays: 28, deadStock: 15000 },
  { category: '收纳盒/箱', value: 520000, turnoverDays: 35, deadStock: 42000 },
  { category: '抽屉收纳系列', value: 480000, turnoverDays: 45, deadStock: 55000 },
  { category: '抽屉式收纳系列', value: 410000, turnoverDays: 52, deadStock: 68000 },
  { category: '化妆收纳品类', value: 280000, turnoverDays: 32, deadStock: 12000 },
];

const outOfStockData = [
  { sku: 'SKU-BOX-012', category: '收纳盒/箱', lostSales: 12500, daysOut: 5 },
  { sku: 'SKU-FOOD-005', category: '食品容器', lostSales: 8200, daysOut: 3 },
  { sku: 'SKU-MKP-018', category: '化妆收纳品类', lostSales: 15000, daysOut: 7 },
];

const kpis = [
  { title: '总库存金额', value: '¥2,040,000', icon: Archive, color: 'text-blue-600', bg: 'bg-blue-50' },
  { title: '平均周转天数', value: '38 天', icon: Truck, color: 'text-green-600', bg: 'bg-green-50' },
  { title: '滞销库存金额', value: '¥192,000', icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-50' },
  { title: '缺货 SKU 数量', value: '14 个', icon: PackageSearch, color: 'text-orange-600', bg: 'bg-orange-50' },
];

export default function SupplyChain() {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-lg">
        <div className="text-xs text-blue-800">
          <span className="font-bold mr-2">【示例分析结论】</span>
          当前库存周转天数 78 天，库存偏高，需要减少采购。
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
          <h3 className="text-lg font-semibold text-gray-800 mb-4">各品类库存周转天数</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={inventoryData} layout="vertical" margin={{ left: 40 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f3f4f6" />
                <XAxis type="number" axisLine={false} tickLine={false} />
                <YAxis dataKey="category" type="category" axisLine={false} tickLine={false} width={100} />
                <Tooltip cursor={{fill: '#f9fafb'}} />
                <Bar dataKey="turnoverDays" name="周转天数" fill="#10b981" radius={[0, 4, 4, 0]} barSize={24}>
                  {inventoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.turnoverDays > 45 ? '#ef4444' : entry.turnoverDays > 35 ? '#f59e0b' : '#10b981'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">库存金额 vs 滞销金额</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={inventoryData} margin={{ top: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="category" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} tickFormatter={(val) => `¥${val/10000}w`} />
                <Tooltip formatter={(value: number) => `¥${value.toLocaleString()}`} />
                <Legend />
                <Bar dataKey="value" name="健康库存" stackId="a" fill="#3b82f6" barSize={32} />
                <Bar dataKey="deadStock" name="滞销库存" stackId="a" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">高风险缺货 SKU 预警</h3>
          <span className="text-sm text-red-600 bg-red-50 px-3 py-1 rounded-full font-medium">需紧急补货</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-sm">
                <th className="p-4 font-medium">SKU</th>
                <th className="p-4 font-medium">所属品类</th>
                <th className="p-4 font-medium text-right">已缺货天数</th>
                <th className="p-4 font-medium text-right">预估损失销售额 (¥)</th>
                <th className="p-4 font-medium text-center">状态</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {outOfStockData.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 text-blue-600 font-mono text-sm">{item.sku}</td>
                  <td className="p-4 text-gray-600">{item.category}</td>
                  <td className="p-4 text-right font-medium text-red-600">{item.daysOut} 天</td>
                  <td className="p-4 text-right text-gray-900 font-medium">{item.lostSales.toLocaleString()}</td>
                  <td className="p-4 text-center">
                    <span className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded border border-orange-100">
                      在途 (预计3天后到港)
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


