import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

interface SupplyChainMetricProps {
  title: string;
  value: string | number;
  change?: number;
  trend?: 'up' | 'down' | 'neutral';
  icon: React.ReactNode;
}

const SupplyChainMetric: React.FC<SupplyChainMetricProps> = ({
  title,
  value,
  change,
  trend = 'neutral',
  icon,
}) => {
  const trendColors = {
    up: 'text-green-600',
    down: 'text-red-600',
    neutral: 'text-gray-600',
  };

  const trendIcons = {
    up: <ArrowUpRight size={16} className="text-green-600" />,
    down: <ArrowDownRight size={16} className="text-red-600" />,
    neutral: <Minus size={16} className="text-gray-600" />,
  };

  return (
    <div className="bg-white rounded-lg shadow p-5 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <div className="p-2 rounded-lg bg-blue-50 text-blue-700">{icon}</div>
      </div>
      <div className="flex items-baseline">
        <span className="text-2xl font-bold text-gray-900">{value}</span>
        {change !== undefined && (
          <div className={`flex items-center ml-2 ${trendColors[trend]}`}>
            <span className="text-sm font-medium ml-1">
              {change > 0 ? '+' : ''}
              {change}%
            </span>
            {trendIcons[trend]}
          </div>
        )}
      </div>
    </div>
  );
};

export default SupplyChainMetric;