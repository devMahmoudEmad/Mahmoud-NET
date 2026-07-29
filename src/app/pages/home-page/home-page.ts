import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero';
import { ExperienceComponent } from '../../components/experience/experience';
import { ProjectsComponent } from '../../components/projects/projects';
import { AboutSkillsComponent } from '../../components/about-skills/about-skills';
import { ContactComponent } from '../../components/contact/contact';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    HeroComponent,
    ExperienceComponent,
    ProjectsComponent,
    AboutSkillsComponent,
    ContactComponent,
  ],
  template: `
    <main class="main-content">
      <section id="hero"><app-hero></app-hero></section>
      <section id="experience"><app-experience></app-experience></section>
      <section id="projects"><app-projects></app-projects></section>
      <section id="about"><app-about-skills></app-about-skills></section>
      <section id="contact"><app-contact></app-contact></section>
    </main>
  `,
  styles: [`
    .main-content { min-height: 100vh; }
  `],
})
export class HomePageComponent {}
