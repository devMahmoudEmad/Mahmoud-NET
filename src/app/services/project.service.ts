import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  titleAr?: string;
  description: string;
  descriptionAr?: string;
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
      title: 'Raqmiya E-Commerce with .NET Core Web Api and Angular',
      description: 'A comprehensive e-commerce platform built with .NET Core and Angular.My biggest contribution to this project was the development of the backend API using .NET Core, which involved designing RESTful endpoints for product management, user authentication, and order processing. I also implemented the database schema using Entity Framework and SQL Server, ensuring efficient data retrieval and storage.',
      technologies: ['.NET Core', 'Angular', 'SQL Server', 'Entity Framework', 'C#', 'TypeScript'],
      githubUrl: 'https://github.com/Algorithm-Archetict/Raqmiya',
      imageUrl: 'raqmiy.jpeg',
      featured: true,
      category: 'web'
    },
    {
      id: 2,
      title: 'Raqmiya E-Commerce with .NET Core MVC',
      description: 'An e-commerce web application built with ASP.NET Core MVC, featuring product management, user authentication, and a responsive design.',
      technologies: ['ASP.NET Core MVC', 'C#', 'Entity Framework', 'SQL Server', 'Bootstrap'],
      githubUrl: 'https://github.com/mido22mo/Raqmiya-ITI-MVC-Project',
      featured: true,
      category: 'api'
    },
     {
      id: 3,
      title: 'Angular Portfolio Website',
      description: 'This responsive portfolio website showcasing my development skills. Built with Angular, featuring modern design, dark/light theme toggle, and smooth animations.',
      technologies: ['Angular', 'TypeScript', 'CSS3', 'HTML5', 'Responsive Design'],
      githubUrl: 'https://github.com/devMahmoudEmad',
      liveUrl: '#',
      imageUrl: 'portdolio.png',
    
      featured: true,
      category: 'web'
    },
    {
      id: 4,
      title: 'E-Commerce Platform',
      description: 'A fully functional e-commerce platform. It provides users with a seamless shopping experience, including product browsing, cart management,orders and users mangement.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap','sweetalert'],
      githubUrl: 'https://github.com/devMahmoudEmad/E-Commerce-platform',
      imageUrl: 'GreatShop.jpeg',
      featured: false,
      category: 'web'
    },
    {
      id: 5,
      title: 'Fruit Shop Management System',
      description: 'A Web application for  a fruit shop inventory Built only with HTML, CSS',
      technologies: ['HTML', 'CSS'],
      githubUrl: 'https://github.com/devMahmoudEmad/fruits-shop',
      liveUrl: 'https://devmahmoudemad.github.io/fruits-shop/',
      imageUrl: 'fruit%20shop.png',
      featured: false,
      category: 'web'
    },{
      id: 6,
      title: 'Cafe Management desktop Application',
      description: 'C# Windows Forms application for managing a cafe, built with .NET 8.0 and Entity Framework Core for data access ',
      technologies: ['C#', 'Windows Forms', '.NET 8.0', 'Entity Framework Core', 'SQL Server'],
      githubUrl: 'https://github.com/devMahmoudEmad/Cafe-WinForms/tree/master',
      featured: false,
      category: 'desktop'
    },{
      id: 7,
      title: 'Repair Shop Management System Desktop Application',
      titleAr: 'نظام إدارة ورشة صيانة الهواتف',
      description: 'Independently designed and developed a desktop system to manage end-to-end operations of a mobile repair shop. Translated real business workflows into technical features including device intake, repair tracking, invoicing, user/role management, daily financial reports, and delivery confirmation. Took full ownership of requirements analysis, implementation, and iterative improvements based on user feedback. Technologies: C#, Avalonia UI, XAML, MVVM, Dapper, SQLite.',
      descriptionAr: 'صممت وطوّرت بشكل مستقل نظام سطح مكتب لإدارة العمليات الشاملة لورشة صيانة الهواتف. قمت بتحويل سير العمل الحقيقي إلى خصائص تقنية تشمل استلام الأجهزة، تتبع الإصلاح، الفوترة، إدارة المستخدمين/الأدوار، التقارير المالية اليومية، وتأكيد التسليم. توليت تحليل المتطلبات والتنفيذ والتحسينات المتكررة بناءً على ملاحظات المستخدمين. التقنيات: C#، Avalonia UI، XAML، MVVM، Dapper، SQLite.',
      technologies: ['C#', 'Avalonia UI', 'XAML', 'MVVM', 'Dapper', 'SQLite'],
      featured: false,
      category: 'desktop'
    },
    {
      id: 8,
      title: 'Movies API (Movies & Genres Management) – Personal Project',
      description: 'Built a RESTful ASP.NET Core Web API for movies CRUD, details, and filtering by genre. Implemented service-based architecture with DI and AutoMapper (DTO to entity mapping). Added validation for poster uploads (type/size) via multipart/form-data endpoints.',
      technologies: ['C#', 'ASP.NET Core Web API', 'EF Core', 'Multipart File Uploads'],
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
