import { z } from 'zod';

export const ProjectResponse = z.object({
  id: z.number(),
  title: z.string(),
  client: z.string(),
  year: z.string(),
  description: z.string(),
  longDescription: z.string(),
  challenge: z.string(),
  solution: z.string(),
  results: z.string(),
  technologies: z.array(z.string()),
  images: z.array(z.string()),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const ProjectsResponse = z.array(ProjectResponse);

export const CreateProjectDTO = ProjectResponse.omit({ 
  id: true, 
  createdAt: true, 
  updatedAt: true 
});

export const UpdateProjectDTO = CreateProjectDTO.partial();

export type Project = z.infer<typeof ProjectResponse>;
export type CreateProject = z.infer<typeof CreateProjectDTO>;
export type UpdateProject = z.infer<typeof UpdateProjectDTO>;