import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { 
  Cpu,
  BarChart,
  Radio,
  Database,
  MapPin,
  Eye,
  MessageSquare
} from 'lucide-react';

interface TechSolution {
  id: number;
  title: string;
  description: string;
  impact: string;
  implementationTime: string;
  costLevel: 'Low' | 'Medium' | 'High';
  painPointsAddressed: string[];
  icon: React.ReactNode;
}

const TechSolutions: React.FC = () => {
  const solutions: TechSolution[] = [
    {
      id: 1,
      title: 'AI-Powered Demand Forecasting',
      description: 'Machine learning algorithms that analyze historical data, market trends, and external factors to predict demand with higher accuracy.',
      impact: 'Reduces stockouts by 35% and excess inventory by 25%',
      implementationTime: '3-4 months',
      costLevel: 'Medium',
      painPointsAddressed: ['Inventory imbalances', 'Stockouts', 'Excess inventory costs'],
      icon: <Cpu className="text-blue-600" />,
    },
    {
      id: 2,
      title: 'Predictive Analytics Dashboard',
      description: 'Real-time analytics platform that identifies potential disruptions before they impact operations.',
      impact: 'Improves response time to potential issues by 60%',
      implementationTime: '2-3 months',
      costLevel: 'Medium',
      painPointsAddressed: ['Delayed responses to issues', 'Limited visibility', 'Reactive decision-making'],
      icon: <BarChart className="text-purple-600" />,
    },
    {
      id: 3,
      title: 'IoT Sensor Network',
      description: 'Connected sensors throughout the supply chain that monitor conditions, location, and status of inventory and assets.',
      impact: 'Increases inventory accuracy to 99% and reduces shrinkage by 40%',
      implementationTime: '4-6 months',
      costLevel: 'High',
      painPointsAddressed: ['Inventory inaccuracies', 'Condition monitoring', 'Asset tracking'],
      icon: <Radio className="text-green-600" />,
    },
    {
      id: 4,
      title: 'Unified Data Platform',
      description: 'Centralized data repository that integrates information from all supply chain nodes and systems.',
      impact: 'Reduces data silos and improves cross-functional decision-making by 45%',
      implementationTime: '5-7 months',
      costLevel: 'High',
      painPointsAddressed: ['Data fragmentation', 'Inconsistent reporting', 'Slow information flow'],
      icon: <Database className="text-amber-600" />,
    },
    {
      id: 5,
      title: 'Dynamic Route Optimization',
      description: 'AI-based system that continuously recalculates optimal delivery routes based on real-time conditions and constraints.',
      impact: 'Reduces transportation costs by 15% and improves on-time delivery by 23%',
      implementationTime: '2-3 months',
      costLevel: 'Medium',
      painPointsAddressed: ['Delivery delays', 'Fuel inefficiency', 'Suboptimal routing'],
      icon: <MapPin className="text-red-600" />,
    },
    {
      id: 6,
      title: 'Supply Chain Digital Twin',
      description: 'Virtual replica of the physical supply chain that enables simulation, testing, and optimization of strategies.',
      impact: 'Enables 40% faster response to disruptions through scenario planning',
      implementationTime: '6-8 months',
      costLevel: 'High',
      painPointsAddressed: ['Poor scenario planning', 'Slow adaptation to changes', 'Limited optimization testing'],
      icon: <Eye className="text-indigo-600" />,
    },
  ];

  const getCostLevelClass = (level: string) => {
    switch (level) {
      case 'Low': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-amber-100 text-amber-800';
      case 'High': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Tech Solutions Explorer</h1>
        <p className="mt-1 text-gray-600">
          Discover innovative technologies to address supply chain challenges
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {solutions.map((solution) => (
          <Card key={solution.id} className="border border-gray-200 flex flex-col">
            <div className="flex items-start mb-4">
              <div className="p-3 rounded-lg bg-blue-50 mr-4">
                {solution.icon}
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">{solution.title}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getCostLevelClass(solution.costLevel)}`}>
                    {solution.costLevel} Cost
                  </span>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                    {solution.implementationTime}
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">{solution.description}</p>
            
            <div className="bg-gray-50 p-3 rounded-md mb-4">
              <p className="text-sm font-medium text-gray-900">Expected Impact:</p>
              <p className="text-sm text-gray-700">{solution.impact}</p>
            </div>
            
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-900 mb-2">Addresses Pain Points:</p>
              <ul className="list-disc pl-5 space-y-1">
                {solution.painPointsAddressed.map((point, idx) => (
                  <li key={idx} className="text-sm text-gray-600">{point}</li>
                ))}
              </ul>
            </div>
            
            <div className="mt-auto pt-4 flex justify-between">
              <Button variant="outline" size="sm" icon={<MessageSquare size={16} />}>
                Request Info
              </Button>
              <Button variant="primary" size="sm">
                Explore Solution
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TechSolutions;