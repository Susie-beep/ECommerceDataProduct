import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import { Star, MessageCircle, ThumbsUp, AlertCircle } from 'lucide-react';

const sentimentData = [
  { subject: '质量', A: 120, B: 110, fullMark: 150 },
  { subject: '价格', A: 98, B: 130, fullMark: 150 },
  { subject: '外观设计', A: 140, B: 130, fullMark: 150 },
  { subject: '实用性', A: 135, B: 100, fullMark: 150 },
  { subject: '物流速度', A: 85, B: 90, fullMark: 150 },
  { subject: '客服态度', A: 110, B: 85, fullMark: 150 },
];

const keywords = [
  { text: '收纳空间大', count: 450, sentiment: 'positive' },
  { text: '材质结实', count: 380, sentiment: 'positive' },
  { text: '抽屉顺滑', count: 320, sentiment: 'positive' },
  { text: '颜值高', count: 290, sentiment: 'positive' },
  { text: '有异味', count: 150, sentiment: 'negative' },
  { text: '物流慢', count: 120, sentiment: 'negative' },
  { text: '尺寸偏小', count: 95, sentiment: 'negative' },
  { text: '容易刮花', count: 80, sentiment: 'negative' },
];

const ratingData = [
  { category: '食品容器', rating: 4.6, reviews: 1250 },
  { category: '收纳盒/箱', rating: 4.4, reviews: 3400 },
  { category: '抽屉收纳系列', rating: 4.7, reviews: 2100 },
  { category: '抽屉式收纳系列', rating: 4.5, reviews: 1850 },
  { category: '化妆收纳品类', rating: 4.8, reviews: 980 },
];

export default function BrandAnalysis() {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-lg">
        <div className="text-xs text-blue-800">
          <span className="font-bold mr-2">【示例分析结论】</span>
          客户对“收纳空间大”好评最多，但“有异味”是主要负面反馈，需联合供应链排查材质问题。
        </div>
        <div className="text-xs text-blue-600/80 mt-1">
          * 生产级看板可支持下钻分析
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center space-x-4">
          <div className="p-4 rounded-full bg-yellow-50 text-yellow-500">
            <Star size={32} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">全店平均评分</p>
            <div className="flex items-baseline space-x-2">
              <h3 className="text-3xl font-bold text-gray-900">4.6</h3>
              <span className="text-sm text-gray-400">/ 5.0</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center space-x-4">
          <div className="p-4 rounded-full bg-blue-50 text-blue-500">
            <MessageCircle size={32} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">累计评论数</p>
            <h3 className="text-3xl font-bold text-gray-900">9,580</h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center space-x-4">
          <div className="p-4 rounded-full bg-green-50 text-green-500">
            <ThumbsUp size={32} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">好评率 (4星以上)</p>
            <h3 className="text-3xl font-bold text-gray-900">88.5%</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">客户评论关键词 (词云模拟)</h3>
          <div className="flex flex-wrap gap-3 p-4 bg-gray-50 rounded-lg min-h-[300px] content-start">
            {keywords.map((kw, idx) => {
              // Calculate font size based on count
              const fontSize = Math.max(14, Math.min(32, kw.count / 15));
              const isPositive = kw.sentiment === 'positive';
              return (
                <span 
                  key={idx} 
                  className={`inline-block px-3 py-1 rounded-full border ${
                    isPositive 
                      ? 'bg-green-50 text-green-700 border-green-200' 
                      : 'bg-red-50 text-red-700 border-red-200'
                  }`}
                  style={{ fontSize: `${fontSize}px` }}
                >
                  {kw.text} <span className="text-xs opacity-60">({kw.count})</span>
                </span>
              );
            })}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">品牌竞争力雷达图 (本品 vs 竞品)</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={sentimentData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#4b5563', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                <Radar name="本品牌" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.5} />
                <Radar name="主要竞品" dataKey="B" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.3} />
                <Legend />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">各品类评分与评论数</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ratingData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
              <XAxis dataKey="category" axisLine={false} tickLine={false} />
              <YAxis yAxisId="left" domain={[0, 5]} axisLine={false} tickLine={false} />
              <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} />
              <Tooltip cursor={{fill: '#f9fafb'}} />
              <Legend />
              <Bar yAxisId="left" dataKey="rating" name="平均评分" fill="#f59e0b" radius={[4, 4, 0, 0]} barSize={40} />
              <Bar yAxisId="right" dataKey="reviews" name="评论数" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
