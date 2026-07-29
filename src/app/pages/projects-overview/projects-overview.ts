import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectService, Project } from '../../services/project.service';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-projects-overview',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './projects-overview.html',
  styleUrls: ['./projects-overview.css'],
})
export class ProjectsOverviewComponent implements OnInit {
  private projectService = inject(ProjectService);
  protected languageService = inject(LanguageService);
  projects: Project[] = [];

  projectRoutes: Record<number, string> = {
    1: '/projects/hospital-information-system',
    2: '/projects/repair-shop-management',
    3: '/projects/raqmiya-ecommerce',
  };

  ngOnInit(): void {
    this.projects = this.projectService.getFeaturedProjects();
  }

  getProjectRoute(project: Project): string {
    return this.projectRoutes[project.id] || '/projects';
  }

  getTitle(project: Project): string {
    return this.languageService.currentLang() === 'ar' && project.titleAr
      ? project.titleAr
      : project.title;
  }
}
