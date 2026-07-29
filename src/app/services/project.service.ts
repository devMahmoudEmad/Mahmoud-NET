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
  caseStudyId?: string;
  featured: boolean;
  category: 'web' | 'api' | 'desktop' | 'other';
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    // ═══════════════════════════════════
    // FEATURED PROJECTS
    // ═══════════════════════════════════
    {
      id: 1,
      title: 'Hospital Information System (HIS)',
      titleAr: 'نظام معلومات المستشفيات',
      description:
        'Enterprise Hospital Information System serving 15+ clinical and administrative modules including Patient Management, Appointment Scheduling, Electronic Medical Records, Laboratory, Radiology, Pharmacy, Billing, Insurance, Inventory, and Reporting. I contributed across the full stack — developing and maintaining REST APIs, designing SQL Server database schemas, implementing JWT authentication and role-based access, integrating SignalR for real-time notifications, and refactoring legacy code for maintainability. The backend follows a layered architecture with Repository Pattern, Dependency Injection, and centralized middleware for auth, validation, logging, and exception handling.',
      descriptionAr:
        'نظام معلومات مستشفيات مؤسسي يخدم 15+ وحدة سريرية وإدارية تشمل إدارة المرضى، جدولة المواعيد، السجلات الطبية الإلكترونية، المختبر، الأشعة، الصيدلية، الفواتير، التأمين، المخزون، والتقارير. ساهمت في كامل الطيف التقني — تطوير وصيانة واجهات REST API، تصميم قواعد بيانات SQL Server، تطبيق مصادقة JWT والتحكم بالوصول، دمج SignalR للإشعارات الفورية، وإعادة هيكلة الكود القديم. الخلفية تتبع معمارية متعددة الطبقات مع Repository Pattern وحقن التبعيات و Middleware مركزي.',
      technologies: [
        'ASP.NET Core',
        'C#',
        'SQL Server',
        'Entity Framework Core',
        'JWT',
        'ASP.NET Identity',
        'SignalR',
        'Angular',
        'REST API',
        'Layered Architecture',
      ],
      featured: true,
      category: 'web',
    },
    {
      id: 2,
      title: 'Repair Shop Management System',
      titleAr: 'نظام إدارة ورشة الصيانة',
      description:
        'Independently designed and developed a cross-platform desktop application managing the complete lifecycle of a mobile repair shop — device intake, diagnostics tracking, repair workflow, inventory management, invoicing, daily financial reports, and delivery confirmation. Built with Avalonia UI following the MVVM pattern. Used Dapper with SQLite for lightweight, high-performance data access. Took full ownership of requirements analysis, architecture decisions, implementation, and iterative improvements based on real user feedback.',
      descriptionAr:
        'صممت وطوّرت بشكل مستقل تطبيق سطح مكتب عبر المنصات يدير دورة حياة ورشة إصلاح الهواتف بالكامل — استلام الأجهزة، تتبع التشخيص، سير عمل الإصلاح، إدارة المخزون، الفواتير، التقارير المالية اليومية، وتأكيد التسليم. بُني باستخدام Avalonia UI باتباع نمط MVVM. استخدمت Dapper مع SQLite للوصول خفيف الوزن وعالي الأداء. توليت تحليل المتطلبات وقرارات التصميم والتنفيذ والتحسينات بناءً على ملاحظات المستخدمين الحقيقية.',
      technologies: [
        'C#',
        'Avalonia UI',
        'XAML',
        'MVVM',
        'Dapper',
        'SQLite',
      ],
      githubUrl: 'https://github.com/devMahmoudEmad/Repair-Shop-Management-System',
      featured: true,
      category: 'desktop',
    },
    {
      id: 3,
      title: 'Raqmiya E-Commerce — .NET Core Web API + Angular',
      titleAr: 'رقمية للتجارة الإلكترونية — .NET Core Web API وAngular',
      description:
        'Full-stack e-commerce platform with a .NET Core Web API backend and Angular frontend. My primary contribution was designing and building the backend API — RESTful endpoints for product management, user authentication, order processing, and payment workflows. Implemented database schema with Entity Framework Core and SQL Server, ensuring normalized relationships and efficient query performance. The backend follows clean architecture principles with service layer separation and DTO validation.',
      descriptionAr:
        'منصة تجارة إلكترونية متكاملة مع خلفية .NET Core Web API وواجهة Angular. مساهمتي الرئيسية كانت تصميم وبناء API الخلفية — نقاط نهاية RESTful لإدارة المنتجات، توثيق المستخدمين، معالجة الطلبات، ومدفوعات. طبقت مخطط قاعدة البيانات باستخدام Entity Framework Core وSQL Server مع علاقات طبيعية وأداء استعلامات فعال. الخلفية تتبع مبادئ Clean Architecture مع طبقة خدمات منفصلة والتحقق من DTO.',
      technologies: [
        '.NET Core',
        'Angular',
        'SQL Server',
        'Entity Framework Core',
        'C#',
        'TypeScript',
        'REST API',
      ],
      githubUrl: 'https://github.com/Algorithm-Archetict/Raqmiya',
      imageUrl: 'raqmiy.jpeg',
      caseStudyId: 'his',
      featured: true,
      category: 'web',
    },
    // ═══════════════════════════════════
    // OTHER PROJECTS
    // ═══════════════════════════════════
    {
      id: 4,
      title: 'Movies API — ASP.NET Core Web API',
      titleAr: 'واجهة أفلام API — ASP.NET Core Web API',
      description:
        'RESTful API for managing movies and genres with full CRUD operations, filtering by genre, and multipart file upload for posters. Built with ASP.NET Core Web API using service-based architecture, dependency injection, AutoMapper for DTO-to-entity mapping, and validation for file type and size constraints.',
      descriptionAr:
        'واجهة RESTful لإدارة الأفلام والأنواع مع عمليات CRUD كاملة، تصفية حسب النوع، ورفع ملفات للملصقات. بُنيت باستخدام ASP.NET Core Web API بمعمارية قائمة على الخدمات، حقن التبعيات، AutoMapper للتحويل بين DTO والكيانات، والتحقق من نوع وحجم الملفات.',
      technologies: [
        'C#',
        'ASP.NET Core Web API',
        'EF Core',
        'AutoMapper',
        'REST API',
      ],
      githubUrl: 'https://github.com/devMahmoudEmad/Movies-API',
      featured: false,
      category: 'api',
    },
    {
      id: 5,
      title: 'Cafe Management — Windows Forms',
      titleAr: 'إدارة مقهى — Windows Forms',
      description:
        'Desktop application for cafe management built with C# Windows Forms and .NET 8.0. Uses Entity Framework Core for data access with SQL Server. Supports order management, billing, and inventory tracking.',
      descriptionAr:
        'تطبيق سطح مكتب لإدارة المقهى بُني باستخدام C# Windows Forms و.NET 8.0. يستخدم Entity Framework Core للوصول للبيانات مع SQL Server. يدير الطلبات والفواتير وتتبع المخزون.',
      technologies: [
        'C#',
        'Windows Forms',
        '.NET 8.0',
        'Entity Framework Core',
        'SQL Server',
      ],
      githubUrl: 'https://github.com/devMahmoudEmad/Cafe-WinForms',
      featured: false,
      category: 'desktop',
    },
    {
      id: 6,
      title: 'Raqmiya E-Commerce — ASP.NET Core MVC',
      titleAr: 'رقمية للتجارة الإلكترونية — ASP.NET Core MVC',
      description:
        'E-commerce web application built with ASP.NET Core MVC, featuring product management, user authentication with ASP.NET Identity, shopping cart, and order processing with SQL Server and Entity Framework Core.',
      descriptionAr:
        'تطبيق تجارة إلكترونية بُني باستخدام ASP.NET Core MVC مع إدارة المنتجات، توثيق المستخدمين بـ ASP.NET Identity، سلة التسوق، ومعالجة الطلبات باستخدام SQL Server وEntity Framework Core.',
      technologies: [
        'ASP.NET Core MVC',
        'C#',
        'Entity Framework Core',
        'SQL Server',
        'Bootstrap',
      ],
      githubUrl: 'https://github.com/mido22mo/Raqmiya-ITI-MVC-Project',
      featured: false,
      category: 'web',
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find((project) => project.id === id);
  }

  getFeaturedProjects(): Project[] {
    return this.projects.filter((project) => project.featured);
  }

  getProjectsByCategory(category: string): Project[] {
    if (category === 'all' || category === 'featured') {
      return category === 'featured' ? this.getFeaturedProjects() : this.projects;
    }
    return this.projects.filter((project) => project.category === category);
  }
}
