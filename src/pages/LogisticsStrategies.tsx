import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { 
  TrendingUp, 
  Clock, 
  BarChart3,
  Map,
  Truck,
  Building,
  Boxes,
  Shuffle
} from 'lucide-react';

const LogisticsStrategies: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Logistics Strategies</h1>
        <p className="mt-1 text-gray-600">
          Optimize routes, forecasting, and inventory management across your supply chain
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <div className="flex items-start mb-4">
            <div className="p-2 bg-blue-100 rounded-lg mr-3">
              <TrendingUp className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Demand Forecasting Optimization</h3>
              <p className="text-sm text-gray-600 mt-1">
                Enhance prediction accuracy through advanced analytics and multiple data sources
              </p>
            </div>
          </div>
          
          <div className="space-y-3 mb-4">
            <h4 className="text-sm font-medium text-gray-700">Key Approaches:</h4>
            <div className="grid grid-cols-1 gap-2">
              {[
                'Time series analysis with seasonal adjustments',
                'Machine learning models incorporating market signals',
                'Collaborative forecasting with suppliers and retailers',
                'Demand sensing with real-time POS data integration'
              ].map((approach, idx) => (
                <div key={idx} className="flex items-center p-2 rounded bg-gray-50">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                  <p className="text-sm text-gray-700">{approach}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button variant="outline" size="sm" className="mr-2">
              Learn More
            </Button>
            <Button variant="primary" size="sm">
              Implementation Guide
            </Button>
          </div>
        </Card>

        <Card>
          <div className="flex items-start mb-4">
            <div className="p-2 bg-teal-100 rounded-lg mr-3">
              <Map className="h-6 w-6 text-teal-700" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Route Optimization Strategy</h3>
              <p className="text-sm text-gray-600 mt-1">
                Minimize transportation costs and delivery times through intelligent routing
              </p>
            </div>
          </div>
          
          <div className="space-y-3 mb-4">
            <h4 className="text-sm font-medium text-gray-700">Key Approaches:</h4>
            <div className="grid grid-cols-1 gap-2">
              {[
                'Dynamic routing based on real-time traffic and weather',
                'Multi-stop optimization to reduce total distance',
                'Time-window delivery scheduling for urban areas',
                'Load consolidation to maximize vehicle utilization'
              ].map((approach, idx) => (
                <div key={idx} className="flex items-center p-2 rounded bg-gray-50">
                  <div className="w-2 h-2 rounded-full bg-teal-500 mr-2"></div>
                  <p className="text-sm text-gray-700">{approach}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button variant="outline" size="sm" className="mr-2">
              Learn More
            </Button>
            <Button variant="primary" size="sm">
              Implementation Guide
            </Button>
          </div>
        </Card>

        <Card>
          <div className="flex items-start mb-4">
            <div className="p-2 bg-amber-100 rounded-lg mr-3">
              <Boxes className="h-6 w-6 text-amber-700" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Real-time Inventory Management</h3>
              <p className="text-sm text-gray-600 mt-1">
                Maintain optimal stock levels through continuous monitoring and automated replenishment
              </p>
            </div>
          </div>
          
          <div className="space-y-3 mb-4">
            <h4 className="text-sm font-medium text-gray-700">Key Approaches:</h4>
            <div className="grid grid-cols-1 gap-2">
              {[
                'RFID and IoT-enabled inventory tracking',
                'AI-driven safety stock calculations by SKU',
                'Cross-location inventory visibility and sharing',
                'Automated reordering with dynamic thresholds'
              ].map((approach, idx) => (
                <div key={idx} className="flex items-center p-2 rounded bg-gray-50">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
                  <p className="text-sm text-gray-700">{approach}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button variant="outline" size="sm" className="mr-2">
              Learn More
            </Button>
            <Button variant="primary" size="sm">
              Implementation Guide
            </Button>
          </div>
        </Card>

        <Card>
          <div className="flex items-start mb-4">
            <div className="p-2 bg-purple-100 rounded-lg mr-3">
              <Shuffle className="h-6 w-6 text-purple-700" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Network Redesign Framework</h3>
              <p className="text-sm text-gray-600 mt-1">
                Optimize facility locations and transportation lanes for maximum efficiency
              </p>
            </div>
          </div>
          
          <div className="space-y-3 mb-4">
            <h4 className="text-sm font-medium text-gray-700">Key Approaches:</h4>
            <div className="grid grid-cols-1 gap-2">
              {[
                'Center of gravity analysis for warehouse locations',
                'Multi-echelon inventory optimization',
                'Regional distribution hub strategy',
                'Last-mile micro-fulfillment centers in urban areas'
              ].map((approach, idx) => (
                <div key={idx} className="flex items-center p-2 rounded bg-gray-50">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                  <p className="text-sm text-gray-700">{approach}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button variant="outline" size="sm" className="mr-2">
              Learn More
            </Button>
            <Button variant="primary" size="sm">
              Implementation Guide
            </Button>
          </div>
        </Card>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 md:p-6 border border-gray-200">
        <h2 className="text-xl font-medium text-gray-900 mb-4">Strategy Impact Simulation</h2>
        <p className="text-gray-600 mb-4">
          Explore the potential impact of implementing different logistics strategies based on your current supply chain data.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <div className="flex items-center mb-2">
              <Clock size={16} className="text-blue-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">Lead Time</span>
            </div>
            <div className="flex items-baseline">
              <span className="text-2xl font-bold text-gray-900">-27%</span>
              <span className="text-sm text-gray-500 ml-1">reduction</span>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded shadow-sm">
            <div className="flex items-center mb-2">
              <Truck size={16} className="text-teal-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">Transport Cost</span>
            </div>
            <div className="flex items-baseline">
              <span className="text-2xl font-bold text-gray-900">-18%</span>
              <span className="text-sm text-gray-500 ml-1">reduction</span>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded shadow-sm">
            <div className="flex items-center mb-2">
              <Building size={16} className="text-amber-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">Inventory Cost</span>
            </div>
            <div className="flex items-baseline">
              <span className="text-2xl font-bold text-gray-900">-22%</span>
              <span className="text-sm text-gray-500 ml-1">reduction</span>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded shadow-sm">
            <div className="flex items-center mb-2">
              <BarChart3 size={16} className="text-purple-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">Service Level</span>
            </div>
            <div className="flex items-baseline">
              <span className="text-2xl font-bold text-gray-900">+31%</span>
              <span className="text-sm text-gray-500 ml-1">improvement</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex justify-center">
          <Button variant="secondary" className="mr-3">
            Run Custom Simulation
          </Button>
          <Button variant="primary">
            Generate Strategy Roadmap
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LogisticsStrategies;