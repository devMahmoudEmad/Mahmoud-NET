import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-architecture',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './architecture.html',
  styleUrls: ['./architecture.css'],
})
export class ArchitectureComponent {
  private translate = inject(TranslateService);
  activeSection: 'his' | 'repairShop' | null = 'his';

  setActive(section: 'his' | 'repairShop'): void {
    this.activeSection = this.activeSection === section ? null : section;
  }

  getHisLayers(): string[] {
    return this.translate.instant('architecture.his.layers');
  }

  getHisFeatures(): string[] {
    return this.translate.instant('architecture.his.features');
  }

  getRepairShopLayers(): string[] {
    return this.translate.instant('architecture.repairShop.layers');
  }

  getRepairShopFeatures(): string[] {
    return this.translate.instant('architecture.repairShop.features');
  }
}
