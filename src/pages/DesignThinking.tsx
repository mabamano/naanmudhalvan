import React, { useState } from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { 
  Users, 
  Search,
  Target,
  Lightbulb,
  Hammer,
  FlaskConical,
  ArrowRight,
  ArrowLeft,
  Plus,
  ListChecks
} from 'lucide-react';

type Phase = 'empathize' | 'define' | 'ideate' | 'prototype' | 'test';

const DesignThinking: React.FC = () => {
  const [activePhase, setActivePhase] = useState<Phase>('empathize');
  
  const phases: { id: Phase; title: string; icon: React.ReactNode; color: string }[] = [
    { id: 'empathize', title: 'Empathize', icon: <Users size={20} />, color: 'blue' },
    { id: 'define', title: 'Define', icon: <Target size={20} />, color: 'teal' },
    { id: 'ideate', title: 'Ideate', icon: <Lightbulb size={20} />, color: 'amber' },
    { id: 'prototype', title: 'Prototype', icon: <Hammer size={20} />, color: 'purple' },
    { id: 'test', title: 'Test', icon: <FlaskConical size={20} />, color: 'green' },
  ];

  const phaseContent = {
    empathize: {
      title: 'Empathize with Supply Chain Stakeholders',
      description: 'Understand the needs, challenges, and perspectives of all stakeholders involved in the supply chain.',
      activities: [
        'Conduct stakeholder interviews with suppliers, warehouse staff, logistics providers, and customers',
        'Shadow operations personnel during daily activities',
        'Gather quantitative data on pain points and bottlenecks',
        'Create journey maps for products, information, and decisions',
        'Observe actual processes in warehouses, distribution centers, and retail locations'
      ],
      tools: [
        'Stakeholder Interview Templates',
        'Journey Mapping Canvas',
        'Empathy Mapping Tool',
        'Process Observation Guide',
        'User Persona Generator'
      ],
      outputs: [
        'Stakeholder Personas',
        'Journey Maps',
        'Pain Point Repository',
        'Voice of Customer Data',
        'Empathy Maps'
      ]
    },
    define: {
      title: 'Define Key Supply Chain Challenges',
      description: 'Synthesize research findings into clearly articulated problem statements and opportunity areas.',
      activities: [
        'Analyze research data to identify patterns and insights',
        'Prioritize pain points based on impact and frequency',
        'Create "How Might We" (HMW) statements',
        'Map interdependencies between different challenges',
        'Define success metrics for solutions'
      ],
      tools: [
        'Problem Definition Canvas',
        'Pain Point Prioritization Matrix',
        'Root Cause Analysis Templates',
        'Opportunity Mapping Tool',
        'Success Metrics Framework'
      ],
      outputs: [
        'Prioritized Problem Statements',
        'HMW Opportunity Areas',
        'Success Criteria',
        'Challenge Maps',
        'KPI Framework'
      ]
    },
    ideate: {
      title: 'Generate Innovative Supply Chain Solutions',
      description: 'Brainstorm a wide range of potential solutions to address the defined challenges.',
      activities: [
        'Facilitate cross-functional ideation workshops',
        'Use divergent thinking techniques to generate many ideas',
        'Apply constraint-based ideation to push creative boundaries',
        'Benchmark against other industries for inspiration',
        'Combine and build upon promising ideas'
      ],
      tools: [
        'Ideation Workshop Templates',
        'Brainstorming Guides',
        'Idea Voting Tool',
        'Concept Development Canvas',
        'Innovation Matrix'
      ],
      outputs: [
        'Solution Concepts',
        'Technology Integration Ideas',
        'Process Redesign Proposals',
        'Collaboration Models',
        'Innovation Roadmap'
      ]
    },
    prototype: {
      title: 'Create Testable Supply Chain Prototypes',
      description: 'Develop tangible representations of solution concepts to gather feedback and refine ideas.',
      activities: [
        'Create process flow diagrams for new workflows',
        'Develop digital mockups of technology solutions',
        'Build physical/spatial models for facility redesigns',
        'Draft policy and procedure documents',
        'Create simulation models to test concepts'
      ],
      tools: [
        'Rapid Prototyping Guide',
        'Process Modeling Tool',
        'Mockup Creator',
        'Simulation Software',
        'Prototype Evaluation Matrix'
      ],
      outputs: [
        'Process Prototypes',
        'Digital Solution Mockups',
        'Physical Space Models',
        'Policy Drafts',
        'Simulation Results'
      ]
    },
    test: {
      title: 'Test and Refine Supply Chain Solutions',
      description: 'Validate prototypes with users and stakeholders, gather feedback, and iterate on solutions.',
      activities: [
        'Conduct usability testing sessions',
        'Run pilot programs in controlled environments',
        'Gather quantitative and qualitative feedback',
        'Analyze test results against success metrics',
        'Iterate on solutions based on feedback'
      ],
      tools: [
        'Test Plan Templates',
        'Feedback Collection Forms',
        'A/B Testing Framework',
        'Pilot Program Guide',
        'Iteration Planning Canvas'
      ],
      outputs: [
        'Usability Test Results',
        'Pilot Program Data',
        'Stakeholder Feedback',
        'Improvement Recommendations',
        'Go/No-Go Decisions'
      ]
    }
  };

  const renderPhaseContent = (phase: Phase) => {
    const content = phaseContent[phase];
    
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{content.title}</h2>
          <p className="mt-1 text-gray-600">{content.description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <div className="flex items-center mb-4">
              <ListChecks className="text-blue-600 mr-2" size={20} />
              <h3 className="text-lg font-medium text-gray-900">Key Activities</h3>
            </div>
            <ul className="space-y-2">
              {content.activities.map((activity, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="min-w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span className="text-sm text-gray-700">{activity}</span>
                </li>
              ))}
            </ul>
          </Card>
          
          <Card>
            <div className="flex items-center mb-4">
              <Hammer className="text-purple-600 mr-2" size={20} />
              <h3 className="text-lg font-medium text-gray-900">Tools & Templates</h3>
            </div>
            <ul className="space-y-2">
              {content.tools.map((tool, idx) => (
                <li key={idx} className="flex items-center">
                  <button className="text-blue-600 hover:text-blue-800 text-sm w-full text-left py-1.5 px-3 rounded-md hover:bg-blue-50 transition-colors duration-150">
                    {tool}
                  </button>
                </li>
              ))}
            </ul>
          </Card>
          
          <Card>
            <div className="flex items-center mb-4">
              <Target className="text-green-600 mr-2" size={20} />
              <h3 className="text-lg font-medium text-gray-900">Expected Outputs</h3>
            </div>
            <ul className="space-y-2">
              {content.outputs.map((output, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="min-w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-sm text-gray-700">{output}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
        
        <div className="flex justify-between">
          <Button 
            variant="outline" 
            icon={<ArrowLeft size={16} />} 
            onClick={() => {
              const currentIndex = phases.findIndex(p => p.id === activePhase);
              if (currentIndex > 0) {
                setActivePhase(phases[currentIndex - 1].id);
              }
            }}
            disabled={activePhase === 'empathize'}
          >
            Previous Phase
          </Button>
          
          <Button 
            variant="primary" 
            icon={<ArrowRight size={16} />} 
            iconPosition="right"
            onClick={() => {
              const currentIndex = phases.findIndex(p => p.id === activePhase);
              if (currentIndex < phases.length - 1) {
                setActivePhase(phases[currentIndex + 1].id);
              }
            }}
            disabled={activePhase === 'test'}
          >
            Next Phase
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Design Thinking Roadmap</h1>
        <p className="mt-1 text-gray-600">
          Apply human-centered design methodology to transform your supply chain
        </p>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute h-1 bg-gray-200 top-1/2 left-0 right-0 -translate-y-1/2 z-0"></div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {phases.map((phase, index) => {
            const isActive = activePhase === phase.id;
            const isPast = phases.findIndex(p => p.id === activePhase) > index;
            
            return (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`relative flex flex-col items-center z-10 transition-colors duration-200 ${
                  isActive || isPast ? '' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  isActive 
                    ? `bg-${phase.color}-600 text-white` 
                    : isPast 
                      ? `bg-${phase.color}-100 text-${phase.color}-600 border-2 border-${phase.color}-600` 
                      : 'bg-gray-100 text-gray-400'
                }`}>
                  {phase.icon}
                </div>
                <div className={`text-sm font-medium mt-2 ${
                  isActive ? `text-${phase.color}-600` : 'text-gray-700'
                }`}>
                  {phase.title}
                </div>
                {isActive && (
                  <div className={`h-1 w-full bg-${phase.color}-600 mt-2 md:absolute md:top-1/2 md:left-0 md:right-0 md:-translate-y-1/2`}></div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8">
        {renderPhaseContent(activePhase)}
      </div>
      
      <Card>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">Custom Design Thinking Projects</h3>
          <Button variant="primary" size="sm" icon={<Plus size={16} />}>
            New Project
          </Button>
        </div>
        
        <div className="space-y-3">
          {[
            { 
              title: 'Warehouse Layout Optimization', 
              phase: 'Prototype',
              progress: 65,
              owner: 'Operations Team' 
            },
            { 
              title: 'Supplier Collaboration Portal', 
              phase: 'Test',
              progress: 80,
              owner: 'Procurement & IT' 
            },
            { 
              title: 'Last Mile Delivery Experience', 
              phase: 'Empathize',
              progress: 30,
              owner: 'Logistics & Customer Experience' 
            },
          ].map((project, idx) => (
            <div key={idx} className="p-3 rounded-lg border border-gray-200 hover:border-blue-200 transition-colors duration-200">
              <div className="flex justify-between items-start">
                <h4 className="text-base font-medium text-gray-900">{project.title}</h4>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                  {project.phase}
                </span>
              </div>
              
              <div className="mt-2 mb-3">
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="text-gray-500">{project.owner}</span>
                  <span className="font-medium text-gray-700">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div 
                    className="bg-blue-600 h-1.5 rounded-full" 
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button className="text-blue-600 hover:text-blue-800 text-sm flex items-center">
                  View Details
                  <ArrowRight size={14} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default DesignThinking;