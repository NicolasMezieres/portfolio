import { Component, effect, input } from '@angular/core';
import { ThemeService } from '../../service/theme';

@Component({
  selector: 'app-page-not-found .flex-baseline',
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css',
})
export class PageNotFoundComponent {
  isDark: boolean = false;
  constructor(private themeService: ThemeService) {
    effect(() => {
      this.isDark = this.themeService.getTheme();
    });
  }
}
