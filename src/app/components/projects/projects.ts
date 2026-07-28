import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  transition,
  style,
  animate,
  stagger,
  query,
} from '@angular/animations';
import { ProjectService, Project } from '../../services/project.service';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { IconComponent } from '../shared/icon/icon';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    IconComponent,
  ],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
  animations: [
    trigger('cardAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(50px)' }),
            stagger(
              100,
              animate(
                '0.6s ease-out',
                style({ opacity: 1, transform: 'translateY(0)' }),
              ),
            ),
          ],
          { optional: true },
        ),
      ]),
    ]),
  ],
})
export class ProjectsComponent implements OnInit {
  private projectService = inject(ProjectService);
  private languageService = inject(LanguageService);
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  selectedCategory = 'all';
  expandedProjectIds = new Set<number>();

  categories = [
    { value: 'all', labelKey: 'projects.filters.all' },
    { value: 'web', labelKey: 'projects.filters.web' },
    { value: 'api', labelKey: 'projects.filters.api' },
    { value: 'desktop', labelKey: 'projects.filters.desktop' },
    { value: 'other', labelKey: 'projects.filters.other' },
  ];

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projects = this.projectService.getProjects();
    this.filterByCategory('all');
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.filteredProjects =
      category === 'all'
        ? this.projects
        : this.projects.filter((project) => project.category === category);
  }

  getDefaultImage(): string {
    return 'assets/images/project-placeholder.jpg';
  }

  getProjectTitle(project: Project): string {
    return this.languageService.currentLang() === 'ar' && project.titleAr
      ? project.titleAr
      : project.title;
  }

  getProjectDescription(project: Project): string {
    return this.languageService.currentLang() === 'ar' && project.descriptionAr
      ? project.descriptionAr
      : project.description;
  }

  isDescriptionExpanded(projectId: number): boolean {
    return this.expandedProjectIds.has(projectId);
  }

  toggleDescription(projectId: number): void {
    if (this.expandedProjectIds.has(projectId)) {
      this.expandedProjectIds.delete(projectId);
    } else {
      this.expandedProjectIds.add(projectId);
    }
  }
}
