import React from 'react';
import Card from '../components/common/Card';
import SupplyChainMetric from '../components/dashboard/SupplyChainMetric';
import SupplyChainMap from '../components/dashboard/SupplyChainMap';
import { 
  Clock, 
  Package, 
  TrendingUp, 
  Users, 
  AlertTriangle,
  Truck
} from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Supply Chain Dashboard</h1>
        <p className="mt-1 text-gray-600">
          Overview of your retail supply chain performance and key metrics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <SupplyChainMetric 
          title="On-Time Delivery" 
          value="76%" 
          change={-4.2} 
          trend="down"
          icon={<Clock size={20} />}
        />
        <SupplyChainMetric 
          title="Inventory Accuracy" 
          value="92%" 
          change={1.8} 
          trend="up" 
          icon={<Package size={20} />}
        />
        <SupplyChainMetric 
          title="Fulfillment Cost" 
          value="$14.28" 
          change={2.3} 
          trend="down" 
          icon={<TrendingUp size={20} />}
        />
        <SupplyChainMetric 
          title="Customer Satisfaction" 
          value="4.1/5" 
          change={-0.3} 
          trend="down" 
          icon={<Users size={20} />}
        />
        <SupplyChainMetric 
          title="Supply Chain Bottlenecks" 
          value="17" 
          change={5} 
          trend="up" 
          icon={<AlertTriangle size={20} />}
        />
        <SupplyChainMetric 
          title="Average Lead Time" 
          value="6.2 days" 
          change={0.8} 
          trend="up" 
          icon={<Truck size={20} />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SupplyChainMap />
        
        <Card>
          <h3 className="text-lg font-medium mb-4">Critical Pain Points</h3>
          <div className="space-y-4">
            {[
              { issue: 'Warehouse #5 Capacity Constraints', impact: 'High', area: 'Distribution' },
              { issue: 'Supplier Delays in Southeast Region', impact: 'Critical', area: 'Sourcing' },
              { issue: 'Inventory Discrepancies in Electronics', impact: 'Medium', area: 'Inventory' },
              { issue: 'Last Mile Delivery Issues in Urban Areas', impact: 'High', area: 'Delivery' },
            ].map((item, index) => (
              <div key={index} className="flex items-center p-3 rounded-lg border border-gray-200">
                <div className={`w-3 h-3 rounded-full mr-3 ${
                  item.impact === 'Critical' ? 'bg-red-500' : 
                  item.impact === 'High' ? 'bg-amber-500' : 'bg-blue-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{item.issue}</p>
                  <p className="text-xs text-gray-500">{item.area}</p>
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  item.impact === 'Critical' ? 'bg-red-100 text-red-800' : 
                  item.impact === 'High' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {item.impact}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;