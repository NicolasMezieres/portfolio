import { Component, effect } from '@angular/core';
import { ThemeService } from '../../service/theme';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  isDark = false;
  constructor(themeService: ThemeService) {
    effect(() => {
      this.isDark = themeService.getTheme();
    });
  }
}
