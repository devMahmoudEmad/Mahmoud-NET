import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { filter } from 'rxjs';
import { LanguageService } from './services/language.service';
import { scrollToSection } from './utils/scroll.utils';
import { HeaderComponent } from './components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    HeaderComponent,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent implements OnInit {
  private languageService = inject(LanguageService);
  private router = inject(Router);
  title = 'Mahmoud Emad - Full Stack .NET Developer';

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const fragment = this.router.parseUrl(this.router.url).fragment;
      if (fragment) {
        setTimeout(() => scrollToSection(fragment), 100);
      }
    });
  }
}
