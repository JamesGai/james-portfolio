import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
  imports: [CommonModule],
})
export class About {
  skills = [
    { label: 'Angular', icon: '/icons/angular.png' },
    { label: 'React', icon: '/icons/react.png' },
    { label: 'JavaScript', icon: '/icons/javascript.png' },
    { label: 'TypeScript', icon: '/icons/typescript.png' },
    { label: 'Python', icon: '/icons/python.png' },
    { label: 'Git', icon: '/icons/git.png' },
    { label: 'Cypress', icon: '/icons/cypress.png' },
    { label: 'Firebase', icon: '/icons/firebase.png' },
    { label: 'JMeter', icon: '/icons/jmeter.png' },
    { label: 'Java', icon: '/icons/java.png' },
    { label: '.NET core', icon: '/icons/dotnetcore.png' },
    { label: 'Express', icon: '/icons/express.png' },
    { label: 'Flask', icon: '/icons/flask.png' },
    { label: 'C#', icon: '/icons/csharp.png' },
    { label: 'Docker', icon: '/icons/docker.png' },
    { label: 'ML', icon: '/icons/ml.png' },
    { label: 'LLM', icon: '/icons/llm.png' },
    { label: 'Postman', icon: '/icons/postman.png' },
  ];

  interests = [
    { label: 'Gym', icon: '/icons/exercise.png' },
    { label: 'Table Tennis', icon: '/icons/tabeltennis.png' },
    { label: 'Gaming', icon: '/icons/gaming.png' },
    { label: 'Music', icon: '/icons/music.png' },
    { label: 'Firearms', icon: '/icons/firearms.png' },
    { label: 'Cat', icon: '/icons/cat.png' },
  ];
}
