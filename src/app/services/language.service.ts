import { Injectable, computed, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type AppLanguage = 'en' | 'ar';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly storageKey = 'lang';
  private _lang = signal<AppLanguage>(this.getInitialLang());

  currentLang = computed(() => this._lang());

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.applyLanguage(this._lang());
  }

  setLang(lang: AppLanguage): void {
    if (lang === this._lang()) {
      return;
    }
    this._lang.set(lang);
    localStorage.setItem(this.storageKey, lang);
    this.applyLanguage(lang);
  }

  toggleLang(): void {
    this.setLang(this._lang() === 'en' ? 'ar' : 'en');
  }

  private getInitialLang(): AppLanguage {
    const saved = localStorage.getItem(this.storageKey);
    if (saved === 'en' || saved === 'ar') {
      return saved as AppLanguage;
    }
    return 'en';
  }

  private applyLanguage(lang: AppLanguage): void {
    this.translate.use(lang);
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }
}
