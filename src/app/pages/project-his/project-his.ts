import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-project-his',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './project-his.html',
  styleUrls: ['./project-his.css'],
})
export class ProjectHisComponent {
  private translate = inject(TranslateService);

  getRoleItems(): string[] { return this.translate.instant('caseStudy.role.items'); }
  getChallenges(): { title: string; body: string }[] { return this.translate.instant('caseStudy.challenges.items'); }
  getApproachItems(): string[] { return this.translate.instant('caseStudy.approach.items'); }
  getContributions(): string[] { return this.translate.instant('caseStudy.contributions.items'); }
  getDecisions(): { title: string; body: string }[] { return this.translate.instant('caseStudy.decisions.items'); }
  getLearnedCards(): { title: string; body: string }[] { return this.translate.instant('caseStudy.learned.cards'); }
  getTakeawayItems(): string[] { return this.translate.instant('caseStudy.takeaways.items'); }
}
