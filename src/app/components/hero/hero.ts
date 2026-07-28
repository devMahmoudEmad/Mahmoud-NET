import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IconComponent } from '../shared/icon/icon';
import { scrollToSection } from '../../utils/scroll.utils';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule, IconComponent],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'],
})
export class HeroComponent {
  scrollToSection = scrollToSection;
}
