import { Component, effect } from '@angular/core';
import { ThemeService } from '../../service/theme';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `<footer
    class="flex justify-center border-t border-t-dark py-2.5 {{
      isDark ? 'text-champagne bg-dark border-t-mandarin' : ''
    }}"
  >
    <p>©2026</p>
  </footer> `,
})
export class FooterComponent {
  isDark = false;
  constructor(themeService: ThemeService) {
    effect(() => {
      this.isDark = themeService.getTheme();
    });
  }
}
