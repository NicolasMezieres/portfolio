import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  svglAngular,
  svglDocker,
  svglFigma,
  svglMongodb,
  svglMysql,
  svglNestjs,
  svglPostgresql,
  svglPrisma,
  svglReact,
  svglSvelte,
  svglTailwindcss,
} from '@ng-icons/svgl';
@Component({
  selector: 'app-skills .flex-baseline',
  imports: [NgIcon],
  viewProviders: [
    provideIcons({
      svglReact,
      svglTailwindcss,
      svglSvelte,
      svglAngular,
      svglNestjs,
      svglMysql,
      svglPostgresql,
      svglPrisma,
      svglMongodb,
      svglFigma,
      svglDocker,
    }),
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {}
