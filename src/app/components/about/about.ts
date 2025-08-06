import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent {
  highlights = [
    {
      icon: 'code',
      title: 'Clean Code Advocate',
      description: 'I believe in writing maintainable, well-documented code that stands the test of time.'
    },
    {
      icon: 'speed',
      title: 'Performance Focused',
      description: 'Optimizing applications for speed and efficiency is always a top priority in my development process.'
    },
    {
      icon: 'school',
      title: 'Continuous Learner',
      description: 'Technology evolves rapidly, and I stay current with the latest frameworks and best practices.'
    }
  ];
}
