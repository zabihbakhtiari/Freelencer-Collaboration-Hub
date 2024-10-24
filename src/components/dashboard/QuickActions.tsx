import React, { useState } from 'react';
import CreateProjectModal from '../projects/CreateProjectModal';

export default function QuickActions() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateProject = (projectData: any) => {
    // Here you would typically make an API call to create the project
    console.log('Creating project:', projectData);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <h2 className="text-xl font-semibold">Ready to start a new project?</h2>
            <p className="mt-1 opacity-90">Create a new project and invite your team members to collaborate.</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Create Project
            </button>
            <button className="bg-indigo-400 bg-opacity-25 text-white px-4 py-2 rounded-lg hover:bg-opacity-40 transition-colors">
              Invite Team
            </button>
          </div>
        </div>
      </div>

      <CreateProjectModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateProject}
      />
    </>
  );
}