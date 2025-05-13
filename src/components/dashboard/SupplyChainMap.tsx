import React from 'react';
import Card from '../common/Card';

const SupplyChainMap: React.FC = () => {
  return (
    <Card className="h-96">
      <h3 className="text-lg font-medium mb-4">Supply Chain Network</h3>
      <div className="relative h-80 bg-gray-100 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* This would be replaced with an actual map visualization */}
          <div className="text-center px-4">
            <p className="text-gray-500 mb-2">Interactive Supply Chain Map</p>
            <div className="grid grid-cols-3 gap-2 mx-auto max-w-md">
              {Array.from({ length: 9 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`h-16 rounded-lg flex items-center justify-center text-white font-medium ${
                    i % 3 === 0 
                      ? 'bg-blue-600' 
                      : i % 3 === 1 
                        ? 'bg-teal-600' 
                        : 'bg-amber-500'
                  }`}
                >
                  {i === 0 ? 'Suppliers' : i === 2 ? 'Manufacturing' : i === 6 ? 'Distribution' : i === 8 ? 'Retail' : 'Node ' + (i + 1)}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-4">⚡ Node connection indicators and geographical mapping coming soon</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SupplyChainMap;