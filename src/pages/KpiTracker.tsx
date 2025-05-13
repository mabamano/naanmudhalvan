import React, { useState } from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { 
  BarChart3, 
  Calendar, 
  Filter,
  DownloadCloud,
  TrendingUp,
  TrendingDown,
  RefreshCw,
  CheckCircle,
  XCircle
} from 'lucide-react';

type TimeRange = 'weekly' | 'monthly' | 'quarterly' | 'yearly';

interface KPI {
  id: number;
  name: string;
  category: string;
  value: number;
  target: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  change: number;
}

const KpiTracker: React.FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('monthly');
  
  const kpis: KPI[] = [
    {
      id: 1,
      name: 'On-Time Delivery Rate',
      category: 'Delivery',
      value: 76.2,
      target: 95,
      unit: '%',
      trend: 'down',
      change: -3.8
    },
    {
      id: 2,
      name: 'Perfect Order Rate',
      category: 'Order Fulfillment',
      value: 82.4,
      target: 98,
      unit: '%',
      trend: 'up',
      change: 1.2
    },
    {
      id: 3,
      name: 'Inventory Accuracy',
      category: 'Inventory',
      value: 91.5,
      target: 99,
      unit: '%',
      trend: 'up',
      change: 2.3
    },
    {
      id: 4,
      name: 'Order Cycle Time',
      category: 'Order Processing',
      value: 3.2,
      target: 2,
      unit: 'days',
      trend: 'down',
      change: 0.4
    },
    {
      id: 5,
      name: 'Inventory Turnover',
      category: 'Inventory',
      value: 6.8,
      target: 12,
      unit: 'turns',
      trend: 'up',
      change: 0.3
    },
    {
      id: 6,
      name: 'Warehouse Utilization',
      category: 'Warehouse',
      value: 68.3,
      target: 85,
      unit: '%',
      trend: 'stable',
      change: 0
    },
    {
      id: 7,
      name: 'Supply Chain Cost',
      category: 'Financial',
      value: 14.2,
      target: 12,
      unit: '% of revenue',
      trend: 'down',
      change: -0.5
    },
    {
      id: 8,
      name: 'Supplier On-Time Delivery',
      category: 'Sourcing',
      value: 81.7,
      target: 95,
      unit: '%',
      trend: 'up',
      change: 2.1
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp size={16} className="text-green-600" />;
      case 'down':
        return <TrendingDown size={16} className="text-red-600" />;
      default:
        return <RefreshCw size={16} className="text-gray-600" />;
    }
  };

  const getStatusColor = (value: number, target: number, unit: string) => {
    // For metrics where lower is better (like days, cost)
    if (unit.includes('days') || unit.includes('cost') || unit.includes('of revenue')) {
      return value <= target ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
    }
    // For metrics where higher is better
    return value >= target ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800';
  };

  const getStatusIcon = (value: number, target: number, unit: string) => {
    // For metrics where lower is better (like days, cost)
    if (unit.includes('days') || unit.includes('cost') || unit.includes('of revenue')) {
      return value <= target ? 
        <CheckCircle size={16} className="text-green-600" /> : 
        <XCircle size={16} className="text-red-600" />;
    }
    // For metrics where higher is better
    return value >= target ? 
      <CheckCircle size={16} className="text-green-600" /> : 
      <XCircle size={16} className="text-red-600" />;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">KPI Tracker & Feedback Loops</h1>
        <p className="mt-1 text-gray-600">
          Monitor performance metrics and establish continuous improvement cycles
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between md:items-center space-y-4 md:space-y-0">
        <div className="flex space-x-1">
          {(['weekly', 'monthly', 'quarterly', 'yearly'] as TimeRange[]).map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-1.5 text-sm font-medium rounded-md ${
                timeRange === range
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {range.charAt(0).toUpperCase() + range.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm"
            icon={<Filter size={16} />}
          >
            Filter
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            icon={<DownloadCloud size={16} />}
          >
            Export
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            icon={<Calendar size={16} />}
          >
            Set Goals
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <Card key={kpi.id} className="border border-gray-200">
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="text-xs font-medium text-gray-500 block">{kpi.category}</span>
                <h3 className="text-base font-semibold text-gray-900">{kpi.name}</h3>
              </div>
              <div className="flex items-center space-x-1">
                {getStatusIcon(kpi.value, kpi.target, kpi.unit)}
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${getStatusColor(kpi.value, kpi.target, kpi.unit)}`}>
                  {kpi.unit.includes('days') || kpi.unit.includes('cost') || kpi.unit.includes('of revenue')
                    ? kpi.value <= kpi.target ? 'On Target' : 'Off Target'
                    : kpi.value >= kpi.target ? 'On Target' : 'Off Target'}
                </span>
              </div>
            </div>
            
            <div className="mt-2">
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-bold text-gray-900">
                  {kpi.value}{kpi.unit}
                </span>
                <div className="flex items-center">
                  {getTrendIcon(kpi.trend)}
                  <span className={`ml-1 text-sm ${
                    kpi.trend === 'up' 
                      ? (kpi.unit.includes('days') || kpi.unit.includes('cost') || kpi.unit.includes('of revenue') 
                          ? 'text-red-600' : 'text-green-600')
                      : kpi.trend === 'down'
                        ? (kpi.unit.includes('days') || kpi.unit.includes('cost') || kpi.unit.includes('of revenue')
                            ? 'text-green-600' : 'text-red-600')
                        : 'text-gray-600'
                  }`}>
                    {kpi.change > 0 ? '+' : ''}{kpi.change}{kpi.unit}
                  </span>
                </div>
              </div>
              <div className="flex items-center mt-2 text-xs text-gray-500">
                <span>Target: {kpi.target}{kpi.unit}</span>
                <div className="ml-auto flex items-center">
                  <BarChart3 size={14} className="mr-1" />
                  <button className="text-blue-600 hover:text-blue-800">Details</button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Feedback Loop Management</h3>
          <div className="space-y-4">
            {[
              {
                name: 'Customer Satisfaction Survey',
                frequency: 'Weekly',
                lastRun: '3 days ago',
                status: 'Active',
                insightsCount: 8
              },
              {
                name: 'Carrier Performance Review',
                frequency: 'Monthly',
                lastRun: '2 weeks ago',
                status: 'Active',
                insightsCount: 12
              },
              {
                name: 'Warehouse Efficiency Audit',
                frequency: 'Quarterly',
                lastRun: '1 month ago',
                status: 'Active',
                insightsCount: 15
              },
              {
                name: 'Supplier Quality Assessment',
                frequency: 'Monthly',
                lastRun: '3 weeks ago',
                status: 'Pending',
                insightsCount: 0
              },
            ].map((feedback, idx) => (
              <div key={idx} className="p-3 rounded-lg border border-gray-200">
                <div className="flex justify-between">
                  <h4 className="text-base font-medium text-gray-900">{feedback.name}</h4>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    feedback.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {feedback.status}
                  </span>
                </div>
                
                <div className="mt-2 flex flex-wrap text-sm text-gray-600">
                  <span className="mr-4">Frequency: {feedback.frequency}</span>
                  <span>Last run: {feedback.lastRun}</span>
                  {feedback.insightsCount > 0 && (
                    <span className="ml-auto text-blue-600">{feedback.insightsCount} insights generated</span>
                  )}
                </div>
                
                <div className="mt-3 flex justify-end">
                  <Button 
                    variant={feedback.status === 'Active' ? 'outline' : 'primary'} 
                    size="sm"
                  >
                    {feedback.status === 'Active' ? 'View Results' : 'Run Now'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
        
        <Card>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Insights & Actions</h3>
          <div className="space-y-4">
            {[
              {
                insight: 'Late deliveries concentrated in northeast region',
                source: 'On-Time Delivery Analysis',
                date: '2 days ago',
                status: 'Action Required',
                recommendation: 'Evaluate carrier performance and weather patterns'
              },
              {
                insight: 'Inventory accuracy improved after RFID implementation',
                source: 'Inventory Audit',
                date: '1 week ago',
                status: 'Positive Trend',
                recommendation: 'Expand RFID to all distribution centers'
              },
              {
                insight: 'Order processing bottleneck identified at validation step',
                source: 'Process Time Analysis',
                date: '3 days ago',
                status: 'Action Required',
                recommendation: 'Implement automated validation checks'
              },
              {
                insight: 'Supplier A consistently delivering high-quality products ahead of schedule',
                source: 'Supplier Performance Review',
                date: '2 weeks ago',
                status: 'Positive Trend',
                recommendation: 'Explore strategic partnership opportunities'
              },
            ].map((insight, idx) => (
              <div key={idx} className="p-3 rounded-lg border border-gray-200">
                <div className="flex items-start">
                  <div className={`p-1.5 rounded-full mr-3 ${
                    insight.status === 'Action Required' ? 'bg-red-100' : 'bg-green-100'
                  }`}>
                    {insight.status === 'Action Required' 
                      ? <XCircle size={16} className="text-red-600" /> 
                      : <CheckCircle size={16} className="text-green-600" />}
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-gray-900">{insight.insight}</h4>
                    <div className="mt-1 flex text-xs text-gray-500">
                      <span>{insight.source}</span>
                      <span className="mx-2">•</span>
                      <span>{insight.date}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-3 pl-8">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Recommendation:</span> {insight.recommendation}
                  </p>
                </div>
                
                <div className="mt-3 flex justify-end">
                  {insight.status === 'Action Required' ? (
                    <Button variant="secondary" size="sm">
                      Take Action
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm">
                      Review Details
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default KpiTracker;