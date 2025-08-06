import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'],
  animations: [
    trigger('fadeInUp', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate(800, style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideIn', [
      state('in', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate('600ms 200ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class HeroComponent implements OnInit {
  animationState = 'in';

  ngOnInit() {
    // Trigger animations on load
    setTimeout(() => {
      this.animationState = 'in';
    }, 100);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }
}
