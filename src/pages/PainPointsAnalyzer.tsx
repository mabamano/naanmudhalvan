import React, { useState } from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { 
  Plus, 
  ChevronDown, 
  ChevronUp,
  AlertTriangle,
  Trash2
} from 'lucide-react';

interface PainPoint {
  id: number;
  area: string;
  description: string;
  impact: 'Low' | 'Medium' | 'High' | 'Critical';
  rootCauses: string[];
  expanded: boolean;
}

const PainPointsAnalyzer: React.FC = () => {
  const [painPoints, setPainPoints] = useState<PainPoint[]>([
    {
      id: 1,
      area: 'Warehouse Operations',
      description: 'Excessive handling time for incoming shipments',
      impact: 'High',
      rootCauses: [
        'Inconsistent labeling from suppliers',
        'Manual scanning process',
        'Lack of prioritization system',
      ],
      expanded: false,
    },
    {
      id: 2,
      area: 'Transportation',
      description: 'Delivery delays in urban centers',
      impact: 'Critical',
      rootCauses: [
        'Traffic congestion during peak hours',
        'Limited loading/unloading zones',
        'Inefficient route planning',
      ],
      expanded: false,
    },
    {
      id: 3,
      area: 'Inventory Management',
      description: 'Frequent stockouts of high-demand items',
      impact: 'High',
      rootCauses: [
        'Inaccurate demand forecasting',
        'Delayed inventory updates',
        'Inadequate safety stock calculations',
      ],
      expanded: false,
    },
    {
      id: 4,
      area: 'Order Processing',
      description: 'Order fulfillment errors',
      impact: 'Medium',
      rootCauses: [
        'Manual order entry process',
        'Complex product variations',
        'High staff turnover in fulfillment centers',
      ],
      expanded: false,
    },
  ]);

  const toggleExpand = (id: number) => {
    setPainPoints(painPoints.map((point) => 
      point.id === id ? { ...point, expanded: !point.expanded } : point
    ));
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-amber-100 text-amber-800';
      case 'Medium': return 'bg-blue-100 text-blue-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const supplyChainAreas = [
    'Sourcing & Procurement', 
    'Manufacturing', 
    'Warehouse Operations',
    'Inventory Management',
    'Transportation',
    'Order Processing',
    'Last Mile Delivery',
    'Returns Management'
  ];
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Pain Points Analyzer</h1>
        <p className="mt-1 text-gray-600">
          Identify and analyze supply chain bottlenecks and challenges
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between">
            <h2 className="text-lg font-medium text-gray-900">Current Pain Points</h2>
            <Button 
              variant="primary" 
              size="sm"
              icon={<Plus size={16} />}
            >
              Add New
            </Button>
          </div>
          
          <div className="space-y-4">
            {painPoints.map((point) => (
              <Card key={point.id} className="border border-gray-200">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center mb-2">
                      <AlertTriangle 
                        size={16} 
                        className={point.impact === 'Critical' ? 'text-red-500' : 
                                  point.impact === 'High' ? 'text-amber-500' : 
                                  point.impact === 'Medium' ? 'text-blue-500' : 'text-green-500'} 
                      />
                      <span className="text-sm font-medium text-gray-500 ml-2">{point.area}</span>
                      <span 
                        className={`ml-2 text-xs font-medium px-2 py-0.5 rounded-full ${getImpactColor(point.impact)}`}
                      >
                        {point.impact}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">{point.description}</h3>
                  </div>
                  <div className="flex">
                    <button 
                      className="p-1 text-gray-400 hover:text-red-500"
                      aria-label="Delete pain point"
                    >
                      <Trash2 size={18} />
                    </button>
                    <button 
                      className="p-1 text-gray-400 hover:text-gray-700"
                      onClick={() => toggleExpand(point.id)}
                      aria-label={point.expanded ? "Collapse" : "Expand"}
                    >
                      {point.expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                  </div>
                </div>
                
                {point.expanded && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Root Causes:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {point.rootCauses.map((cause, idx) => (
                        <li key={idx} className="text-sm text-gray-600">{cause}</li>
                      ))}
                    </ul>
                    <div className="flex justify-end mt-4">
                      <Button variant="outline" size="sm" className="mr-2">
                        Edit
                      </Button>
                      <Button variant="secondary" size="sm">
                        View Solutions
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        <Card>
          <h3 className="text-lg font-medium mb-4">Supply Chain Area Analysis</h3>
          <div className="space-y-4">
            {supplyChainAreas.map((area, index) => (
              <div key={index} className="relative pt-1">
                <div className="flex justify-between items-center mb-1">
                  <div className="text-sm font-medium text-gray-700">{area}</div>
                  <div className="text-sm font-medium text-gray-700">
                    {area === 'Transportation' || area === 'Warehouse Operations' ? '8' : 
                     area === 'Inventory Management' ? '7' : 
                     area === 'Last Mile Delivery' ? '6' : 
                     area === 'Order Processing' ? '5' : '3'} issues
                  </div>
                </div>
                <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                  <div 
                    style={{ 
                      width: area === 'Transportation' || area === 'Warehouse Operations' ? '80%' : 
                             area === 'Inventory Management' ? '70%' : 
                             area === 'Last Mile Delivery' ? '60%' : 
                             area === 'Order Processing' ? '50%' : '30%' 
                    }} 
                    className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                      area === 'Transportation' || area === 'Warehouse Operations' ? 'bg-red-500' : 
                      area === 'Inventory Management' || area === 'Last Mile Delivery' ? 'bg-amber-500' : 
                      'bg-blue-500'
                    }`}
                  ></div>
                </div>
              </div>
            ))}
            <Button variant="outline" fullWidth className="mt-4">
              View Detailed Analysis
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PainPointsAnalyzer;