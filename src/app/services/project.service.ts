import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  category: 'web' | 'api' | 'desktop' | 'other';
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'Raqmiya E-Commerce Platform',
      description: 'A comprehensive e-commerce platform built with .NET Core and Angular. Features include product catalog, shopping cart, user authentication, order management, and admin dashboard.',
      technologies: ['.NET Core', 'Angular', 'SQL Server', 'Entity Framework', 'C#', 'TypeScript'],
      githubUrl: 'https://github.com/devMahmoudEmad',
      imageUrl: 'raqmiy.jpeg',
      featured: true,
      category: 'web'
    },
    {
      id: 2,
      title: 'Fruit Shop Management System',
      description: 'A desktop application for managing a fruit shop inventory, sales tracking, and customer management. Built with modern .NET technologies.',
      technologies: ['.NET', 'C#', 'WPF', 'SQL Server', 'Entity Framework'],
      githubUrl: 'https://github.com/devMahmoudEmad',
      imageUrl: 'fruit%20shop.png',
      featured: true,
      category: 'desktop'
    },
    {
      id: 3,
      title: 'Angular Portfolio Website',
      description: 'This responsive portfolio website showcasing my development skills. Built with Angular, featuring modern design, dark/light theme toggle, and smooth animations.',
      technologies: ['Angular', 'TypeScript', 'CSS3', 'HTML5', 'Responsive Design'],
      githubUrl: 'https://github.com/devMahmoudEmad',
      liveUrl: '#',
      featured: false,
      category: 'web'
    },
    {
      id: 4,
      title: 'Web API Development Projects',
      description: 'Various RESTful API projects built with ASP.NET Core, implementing clean architecture, authentication, and comprehensive documentation.',
      technologies: ['ASP.NET Core', 'WebAPI', 'JWT', 'Swagger', 'Entity Framework', 'LINQ'],
      githubUrl: 'https://github.com/devMahmoudEmad',
      featured: false,
      category: 'api'
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find(project => project.id === id);
  }

  getFeaturedProjects(): Project[] {
    return this.projects.filter(project => project.featured);
  }

  getProjectsByCategory(category: string): Project[] {
    if (category === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === category);
  }
}
