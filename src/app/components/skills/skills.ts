import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatChipsModule, MatIconModule, MatProgressBarModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Programming Languages',
      icon: 'code',
      skills: [
        { name: 'C#', level: 85 },
        { name: 'SQL', level: 80 },
        { name: 'JavaScript', level: 75 },
        { name: 'TypeScript', level: 70 }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: 'web',
      skills: [
        { name: '.NET Core', level: 85 },
        { name: 'ASP.NET MVC', level: 80 },
        { name: 'Entity Framework', level: 75 },
        { name: 'Angular', level: 70 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: 'build',
      skills: [
        { name: 'Visual Studio', level: 90 },
        { name: 'SQL Server', level: 80 },
        { name: 'Git', level: 75 },
        { name: 'VS Code', level: 85 }
      ]
    }
  ];

  additionalSkills = [
    'WebAPI',
    'LINQ',
    'Bootstrap',
    'HTML5',
    'CSS3',
    'Agile Development',
    'Object-Oriented Programming',
    'Software Testing',
    'Relational Databases',
    'NoSQL',
    'ITI Training Program'
  ];
}
