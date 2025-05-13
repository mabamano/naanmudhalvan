import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMenu } from '../../contexts/MenuContext';
import { 
  LayoutDashboard, 
  AlertCircle, 
  Lightbulb, 
  Truck, 
  Users, 
  PencilRuler,
  BarChart3,
  X
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useMenu();

  const navigationItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/' },
    { name: 'Pain Points', icon: <AlertCircle size={20} />, path: '/pain-points' },
    { name: 'Tech Solutions', icon: <Lightbulb size={20} />, path: '/tech-solutions' },
    { name: 'Logistics Strategies', icon: <Truck size={20} />, path: '/logistics' },
    { name: 'Collaboration Hub', icon: <Users size={20} />, path: '/collaboration' },
    { name: 'Design Thinking', icon: <PencilRuler size={20} />, path: '/design-thinking' },
    { name: 'KPI Tracker', icon: <BarChart3 size={20} />, path: '/kpi-tracker' },
  ];

  return (
    <aside 
      className={`bg-blue-900 text-white w-64 md:shadow transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      } transition-transform duration-300 ease-in-out fixed inset-y-0 left-0 z-30 md:static md:z-auto`}
    >
      <div className="flex items-center justify-between p-4 border-b border-blue-800">
        <h2 className="text-xl font-bold">SupplySync</h2>
        <button onClick={toggleSidebar} className="p-1 rounded-md md:hidden focus:outline-none focus:ring-2 focus:ring-blue-600">
          <X size={20} />
        </button>
      </div>
      <nav className="mt-5 px-2">
        <ul className="space-y-2">
          {navigationItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-sm rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-800 text-white'
                      : 'text-blue-100 hover:bg-blue-800 hover:text-white'
                  }`
                }
                end={item.path === '/'}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;