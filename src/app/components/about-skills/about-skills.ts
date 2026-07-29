import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

export interface SkillGroup {
  key: string;
  titleKey: string;
  itemsKey: string;
  icon: string;
  learning?: boolean;
}

@Component({
  selector: 'app-about-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about-skills.html',
  styleUrls: ['./about-skills.css'],
})
export class AboutSkillsComponent {
  private translate = inject(TranslateService);

  skillGroups: SkillGroup[] = [
    { key: 'backend', titleKey: 'skills.backend', itemsKey: 'skills.backendItems', icon: 'dns' },
    { key: 'architecture', titleKey: 'skills.architecture', itemsKey: 'skills.architectureItems', icon: 'account_tree' },
    { key: 'frontend', titleKey: 'skills.frontend', itemsKey: 'skills.frontendItems', icon: 'web' },
    { key: 'desktop', titleKey: 'skills.desktop', itemsKey: 'skills.desktopItems', icon: 'desktop_windows' },
    { key: 'databases', titleKey: 'skills.databases', itemsKey: 'skills.databasesItems', icon: 'storage' },
    { key: 'tools', titleKey: 'skills.tools', itemsKey: 'skills.toolsItems', icon: 'build' },
    { key: 'learning', titleKey: 'skills.learning', itemsKey: 'skills.learningItems', icon: 'school', learning: true },
  ];

  getGroupItems(group: SkillGroup): string[] {
    return this.translate.instant(group.itemsKey);
  }
}
