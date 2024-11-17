import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { config } from '@/config/env';
import type { Project, CreateProject, UpdateProject } from '@/schemas/project';

const PROJECTS_KEY = 'projects';

// Mock data (move to separate file in real implementation)
const mockProjects: Project[] = [
  {
    id: 1,
    title: "Factory Automation System",
    client: "Thai Manufacturing Co., Ltd",
    year: "2023",
    description: "Implemented complete automation solution using Siemens S7-1500 PLC and SCADA system",
    longDescription: "A comprehensive factory automation project that revolutionized the manufacturing process.",
    challenge: "The client needed to modernize their manufacturing facility.",
    solution: "We implemented a state-of-the-art Siemens S7-1500 PLC system.",
    results: "Achieved 40% increase in production efficiency",
    technologies: ["Siemens PLC", "SCADA"],
    images: ["https://example.com/image1.jpg"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

// API functions
const fetchProjects = async (): Promise<Project[]> => {
  if (config.USE_MOCK_DATA) {
    return mockProjects;
  }
  const response = await fetch(`${config.API_URL}/projects`);
  if (!response.ok) throw new Error('Failed to fetch projects');
  return response.json();
};

const fetchProject = async (id: number): Promise<Project> => {
  if (config.USE_MOCK_DATA) {
    const project = mockProjects.find(p => p.id === id);
    if (!project) throw new Error('Project not found');
    return project;
  }
  const response = await fetch(`${config.API_URL}/projects/${id}`);
  if (!response.ok) throw new Error('Failed to fetch project');
  return response.json();
};

// Hooks
export const useProjects = () => {
  return useQuery({
    queryKey: [PROJECTS_KEY],
    queryFn: fetchProjects,
  });
};

export const useProject = (id: number) => {
  return useQuery({
    queryKey: [PROJECTS_KEY, id],
    queryFn: () => fetchProject(id),
  });
};

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (project: CreateProject) => {
      if (config.USE_MOCK_DATA) {
        throw new Error('Create operation not supported in mock mode');
      }
      const response = await fetch(`${config.API_URL}/projects`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project),
      });
      if (!response.ok) throw new Error('Failed to create project');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PROJECTS_KEY] });
    },
  });
};

export const useUpdateProject = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, data }: { id: number; data: UpdateProject }) => {
      if (config.USE_MOCK_DATA) {
        throw new Error('Update operation not supported in mock mode');
      }
      const response = await fetch(`${config.API_URL}/projects/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to update project');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PROJECTS_KEY] });
    },
  });
};