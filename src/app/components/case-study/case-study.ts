import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './case-study.html',
  styleUrls: ['./case-study.css'],
})
export class CaseStudyComponent {
  private translate = inject(TranslateService);

  getRoleItems(): string[] {
    return this.translate.instant('caseStudy.role.items');
  }

  getChallenges(): { title: string; body: string }[] {
    return this.translate.instant('caseStudy.challenges.items');
  }

  getApproachItems(): string[] {
    return this.translate.instant('caseStudy.approach.items');
  }

  getContributions(): string[] {
    return this.translate.instant('caseStudy.contributions.items');
  }

  getTechKeys(): { key: string; titleKey: string; itemsKey: string }[] {
    const prefix = 'caseStudy.tech';
    return [
      { key: 'backend', titleKey: `${prefix}.groups.backend`, itemsKey: `${prefix}.backendItems` },
      { key: 'architecture', titleKey: `${prefix}.groups.architecture`, itemsKey: `${prefix}.architectureItems` },
      { key: 'database', titleKey: `${prefix}.groups.database`, itemsKey: `${prefix}.databaseItems` },
      { key: 'auth', titleKey: `${prefix}.groups.auth`, itemsKey: `${prefix}.authItems` },
      { key: 'realtime', titleKey: `${prefix}.groups.realtime`, itemsKey: `${prefix}.realtimeItems` },
      { key: 'tools', titleKey: `${prefix}.groups.tools`, itemsKey: `${prefix}.toolsItems` },
    ];
  }

  getTechItems(itemsKey: string): string[] {
    return this.translate.instant(itemsKey);
  }

  getDecisions(): { title: string; body: string }[] {
    return this.translate.instant('caseStudy.decisions.items');
  }

  getLearnedCards(): { title: string; body: string }[] {
    return this.translate.instant('caseStudy.learned.cards');
  }

  getTakeawayItems(): string[] {
    return this.translate.instant('caseStudy.takeaways.items');
  }
}
