import { Component, OnInit, OnDestroy, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { scrollToSection } from '../../utils/scroll.utils';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    TranslateModule,
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private themeService = inject(ThemeService);
  public languageService = inject(LanguageService);

  isMenuOpen = false;
  isDarkMode = false;

  constructor() {
    effect(() => {
      this.isDarkMode = this.themeService.isDarkMode();
    });
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll.bind(this));
  }

  toggleMobileMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleLanguage(): void {
    this.languageService.toggleLang();
  }

  scrollTo(sectionId: string): void {
    this.isMenuOpen = false;
    scrollToSection(sectionId);
  }

  private onScroll(): void {
    const header = document.querySelector('.header');
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 50);
    }
  }
}
