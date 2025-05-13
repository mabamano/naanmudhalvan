import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { 
  Users, 
  MessageSquare, 
  FileText, 
  Calendar,
  CheckSquare,
  Layers,
  ArrowRight
} from 'lucide-react';

const CollaborationHub: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Collaboration Hub</h1>
        <p className="mt-1 text-gray-600">
          Foster seamless collaboration between suppliers, internal teams, and customers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Upcoming Collaboration Events</h3>
              <Button variant="outline" size="sm" icon={<Calendar size={16} />}>
                View Calendar
              </Button>
            </div>
            
            <div className="space-y-3">
              {[
                { 
                  title: 'Supply Chain Visibility Workshop', 
                  date: 'Tomorrow, 10:00 AM', 
                  participants: 'Logistics, Warehouse, IT Teams',
                  type: 'Internal' 
                },
                { 
                  title: 'Quarterly Supplier Performance Review', 
                  date: 'May 24, 2025 - 2:00 PM', 
                  participants: 'Procurement, Key Suppliers',
                  type: 'External' 
                },
                { 
                  title: 'Demand Planning Synchronization', 
                  date: 'May 27, 2025 - 11:00 AM', 
                  participants: 'Sales, Operations, Major Retailers',
                  type: 'External' 
                },
                { 
                  title: 'Last Mile Delivery Optimization Session', 
                  date: 'June 2, 2025 - 9:30 AM', 
                  participants: 'Distribution, Carriers, IT',
                  type: 'Internal' 
                },
              ].map((event, idx) => (
                <div key={idx} className="flex p-3 rounded-lg border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-colors duration-200">
                  <div className="mr-4">
                    <div className={`p-2 rounded-lg ${event.type === 'Internal' ? 'bg-blue-100' : 'bg-green-100'}`}>
                      <Users size={20} className={event.type === 'Internal' ? 'text-blue-600' : 'text-green-600'} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">{event.title}</h4>
                    <p className="text-xs text-gray-500">{event.date}</p>
                    <p className="text-xs text-gray-600 mt-1">{event.participants}</p>
                  </div>
                  <div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      event.type === 'Internal' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                </div>
              ))}
              
              <div className="flex justify-center mt-4">
                <Button variant="outline" size="sm">
                  View All Events
                </Button>
              </div>
            </div>
          </Card>
          
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Active Collaboration Initiatives</h3>
              <Button variant="outline" size="sm" icon={<Layers size={16} />}>
                View All
              </Button>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  title: 'Vendor-Managed Inventory Program',
                  description: 'Partnership with key suppliers to manage inventory levels directly at our distribution centers',
                  progress: 75,
                  tags: ['Suppliers', 'Inventory'],
                },
                {
                  title: 'Shared Forecasting Platform Implementation',
                  description: 'Collaborative system for sharing demand forecasts with suppliers and retailers',
                  progress: 40,
                  tags: ['Forecasting', 'Technology', 'Integration'],
                },
                {
                  title: 'Cross-Docking Optimization Project',
                  description: 'Streamlining the transfer of products from inbound to outbound with minimal handling',
                  progress: 60,
                  tags: ['Operations', 'Warehousing'],
                },
              ].map((initiative, idx) => (
                <div key={idx} className="p-4 rounded-lg border border-gray-200">
                  <h4 className="text-base font-medium text-gray-900">{initiative.title}</h4>
                  <p className="text-sm text-gray-600 mt-1 mb-3">{initiative.description}</p>
                  
                  <div className="mb-3">
                    <div className="flex justify-between items-center text-xs mb-1">
                      <span className="font-medium text-gray-700">Progress</span>
                      <span className="font-medium text-gray-700">{initiative.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${initiative.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {initiative.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                        {tag}
                      </span>
                    ))}
                    <button className="ml-auto text-blue-600 hover:text-blue-800 flex items-center text-sm">
                      Details
                      <ArrowRight size={14} className="ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Collaboration Models</h3>
            <div className="space-y-3">
              {[
                {
                  title: 'Vendor-Managed Inventory',
                  description: 'Suppliers manage stock levels at your facilities',
                  icon: <Layers size={18} />,
                },
                {
                  title: 'Collaborative Planning',
                  description: 'Joint forecasting and replenishment planning',
                  icon: <Calendar size={18} />,
                },
                {
                  title: 'CPFR Framework',
                  description: 'Collaborative Planning, Forecasting, and Replenishment',
                  icon: <CheckSquare size={18} />,
                },
                {
                  title: 'Data Sharing Agreement',
                  description: 'Secure exchange of operational and demand data',
                  icon: <FileText size={18} />,
                },
                {
                  title: 'Cross-Functional Teams',
                  description: 'Dedicated teams spanning organization boundaries',
                  icon: <Users size={18} />,
                },
              ].map((model, idx) => (
                <div key={idx} className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-teal-200 hover:bg-teal-50 transition-colors duration-200">
                  <div className="p-2 rounded-lg bg-teal-100 text-teal-600 mr-3">
                    {model.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">{model.title}</h4>
                    <p className="text-xs text-gray-600">{model.description}</p>
                  </div>
                </div>
              ))}
              <Button variant="secondary" fullWidth className="mt-2">
                Explore Models
              </Button>
            </div>
          </Card>
          
          <Card>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Communication Channels</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center p-3 rounded-lg border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-colors duration-200">
                <div className="p-2 rounded-lg bg-blue-100 text-blue-600 mr-3">
                  <MessageSquare size={18} />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-medium text-gray-900">Supplier Portal</h4>
                  <p className="text-xs text-gray-600">Dedicated communication platform</p>
                </div>
              </button>
              
              <button className="w-full flex items-center p-3 rounded-lg border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-colors duration-200">
                <div className="p-2 rounded-lg bg-blue-100 text-blue-600 mr-3">
                  <Calendar size={18} />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-medium text-gray-900">Planning Sessions</h4>
                  <p className="text-xs text-gray-600">Scheduled collaborative meetings</p>
                </div>
              </button>
              
              <button className="w-full flex items-center p-3 rounded-lg border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-colors duration-200">
                <div className="p-2 rounded-lg bg-blue-100 text-blue-600 mr-3">
                  <FileText size={18} />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-medium text-gray-900">Report Sharing</h4>
                  <p className="text-xs text-gray-600">Standardized performance reporting</p>
                </div>
              </button>
              
              <button className="w-full flex items-center p-3 rounded-lg border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-colors duration-200">
                <div className="p-2 rounded-lg bg-blue-100 text-blue-600 mr-3">
                  <Users size={18} />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-medium text-gray-900">Partner Feedback</h4>
                  <p className="text-xs text-gray-600">Structured feedback collection</p>
                </div>
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CollaborationHub;