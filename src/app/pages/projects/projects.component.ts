import { Component, effect, input } from '@angular/core';
import { ProjectComponent } from '../../components/project/project.component';
import { ThemeService } from '../../service/theme';

@Component({
  selector: 'app-projects .flex-baseline',
  imports: [ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  isDark: boolean = false;
  constructor(private themeService: ThemeService) {
    effect(() => {
      this.isDark = this.themeService.getTheme();
    });
  }
}
