import { Database, ArrowRight, Table, Layers, Target, CheckCircle2, LayoutDashboard, Briefcase } from 'lucide-react';

export default function DataModel() {
  return (
    <div className="space-y-8">
      {/* Business Goals */}
      <section className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Target className="mr-2 text-blue-600" /> 业务目标 (Business Goals)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            '提升库存周转 (Inventory Turnover)',
            '提升广告ROI (Ad ROAS/ROI)',
            '提升利润率 (Profit Margin)',
            '降低滞销库存 (Reduce Dead Stock)'
          ].map((goal, idx) => (
            <div key={idx} className="bg-blue-50 text-blue-800 p-4 rounded-lg flex items-start font-medium">
              <CheckCircle2 className="mr-2 mt-0.5 shrink-0 text-blue-600" size={18} />
              {goal}
            </div>
          ))}
        </div>
      </section>

      {/* Business Analysis System */}
      <section className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Briefcase className="mr-2 text-indigo-600" /> 经营分析体系 (Business Analysis System)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-600 text-sm border-b border-gray-200">
                <th className="p-4 font-semibold w-1/3">模块</th>
                <th className="p-4 font-semibold">解决什么问题</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { module: '销售', problem: '找增长' },
                { module: '广告', problem: '找ROI' },
                { module: '利润', problem: '找赚钱产品' },
                { module: '库存', problem: '防止压货' },
                { module: '供应链', problem: '降低成本' },
                { module: '工厂', problem: '提高产能' },
                { module: '物流', problem: '降低运费' },
                { module: '产品', problem: '找爆款' },
                { module: '市场', problem: '找定价' },
                { module: '财务', problem: '控制费用' },
                { module: '现金流', problem: '防止资金断裂' },
                { module: 'KPI', problem: '管理公司' },
              ].map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">{item.module}</td>
                  <td className="p-4 text-gray-600">{item.problem}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Indicator System */}
      <section className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
          <Layers className="mr-2 text-purple-600" /> 指标体系设计 (Indicator System)
        </h2>
        <p className="text-sm text-gray-500 mb-4 bg-gray-50 p-3 rounded-lg border border-gray-100">
          <span className="font-semibold text-gray-700">说明：</span>下表仅为核心指标示例。实际业务分析中，可根据数据可得性，按多维度扩展建立更完善的指标体系，例如：<span className="text-blue-600">产品分析、渠道分析、复购分析、退货分析、件均成本</span>等细分指标。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-600 text-sm border-b border-gray-200">
                <th className="p-4 font-semibold">指标名称</th>
                <th className="p-4 font-semibold">计算公式</th>
                <th className="p-4 font-semibold">数据来源</th>
                <th className="p-4 font-semibold">业务意义</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-900">GMV (总交易额)</td>
                <td className="p-4 text-gray-600 font-mono text-sm">销量 × 售价</td>
                <td className="p-4 text-blue-600"><Table size={16} className="inline mr-1"/>订单表</td>
                <td className="p-4 text-gray-500 text-sm">衡量整体销售规模</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-900">广告 ROI / ROAS</td>
                <td className="p-4 text-gray-600 font-mono text-sm">广告带来销售额 / 广告花费</td>
                <td className="p-4 text-blue-600"><Table size={16} className="inline mr-1"/>广告表, 订单表</td>
                <td className="p-4 text-gray-500 text-sm">评估广告投放效率</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-900">库存周转天数</td>
                <td className="p-4 text-gray-600 font-mono text-sm">当前库存量 / 过去30天日均销量</td>
                <td className="p-4 text-blue-600"><Table size={16} className="inline mr-1"/>库存表, 订单表</td>
                <td className="p-4 text-gray-500 text-sm">反映资金占用和库存健康度</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-900">净利润 (Profit)</td>
                <td className="p-4 text-gray-600 font-mono text-sm">销售额 - (采购+物流+佣金+广告+仓储+退货)</td>
                <td className="p-4 text-blue-600"><Table size={16} className="inline mr-1"/>多表关联 (宽表)</td>
                <td className="p-4 text-gray-500 text-sm">核心盈利能力指标</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-900">缺货率</td>
                <td className="p-4 text-gray-600 font-mono text-sm">缺货SKU数量 / 总活跃SKU数量</td>
                <td className="p-4 text-blue-600"><Table size={16} className="inline mr-1"/>库存表, SKU表</td>
                <td className="p-4 text-gray-500 text-sm">供应链履约能力</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Data Architecture */}
      <section className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <Database className="mr-2 text-green-600" /> 数据模型架构 (Data Architecture)
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-8 rounded-xl border border-gray-200">
          
          {/* ODS / DWD Layer */}
          <div className="flex flex-col space-y-3 w-full md:w-1/3">
            <h3 className="text-center font-semibold text-gray-500 mb-2">基础数据层 (ODS/DWD)</h3>
            {['订单表 (Orders)', 'SKU表 (Products)', '库存表 (Inventory)', '广告表 (Ads)', '物流表 (Logistics)', '采购表 (Procurement)'].map((table, idx) => (
              <div key={idx} className="bg-white border border-gray-300 p-3 rounded shadow-sm text-center font-medium text-gray-700 flex items-center justify-center">
                <Table size={16} className="mr-2 text-gray-400" /> {table}
              </div>
            ))}
          </div>

          {/* Arrow */}
          <div className="py-8 md:py-0 flex flex-col items-center">
            <ArrowRight size={32} className="text-gray-400 hidden md:block" />
            <div className="text-xs text-gray-500 mt-2 hidden md:block">ETL / 数据清洗关联</div>
          </div>

          {/* DWS Layer */}
          <div className="flex flex-col space-y-4 w-full md:w-1/4">
            <h3 className="text-center font-semibold text-gray-500 mb-2">汇总层 (DWS)</h3>
            <div className="bg-blue-100 border border-blue-300 p-6 rounded-lg shadow-sm text-center font-bold text-blue-800 flex flex-col items-center justify-center h-48">
              <Database size={32} className="mb-2 text-blue-600" />
              经营分析宽表
              <span className="text-xs font-normal text-blue-600 mt-2">(按日/SKU/国家粒度汇总)</span>
            </div>
          </div>

          {/* Arrow */}
          <div className="py-8 md:py-0 flex flex-col items-center">
            <ArrowRight size={32} className="text-gray-400 hidden md:block" />
            <div className="text-xs text-gray-500 mt-2 hidden md:block">数据服务 / BI</div>
          </div>

          {/* ADS Layer */}
          <div className="flex flex-col space-y-3 w-full md:w-1/3">
            <h3 className="text-center font-semibold text-gray-500 mb-2">应用层 (ADS / 看板)</h3>
            {['公司经营总览', '销售分析看板', '广告投放分析', '库存与供应链', '利润分析看板'].map((dashboard, idx) => (
              <div key={idx} className="bg-green-100 border border-green-300 p-3 rounded shadow-sm text-center font-medium text-green-800 flex items-center justify-center">
                <LayoutDashboard size={16} className="mr-2 text-green-600" /> {dashboard}
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}


