import { Component, effect, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { menuBurger } from '../menu-burger/menu-burger.component';
import { ThemeService } from '../../service/theme';
@Component({
  selector: 'app-header',
  imports: [MatIconModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isDark: boolean = false;
  constructor(private themeService: ThemeService) {
    effect(() => {
      this.isDark = this.themeService.getTheme();
    });
  }
  changeTheme() {
    this.themeService.changeTheme();
  }
  readonly dialog = inject(MatDialog);
  openMenu() {
    this.dialog.open(menuBurger, {
      data: { animal: 'panda' },
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
    });
  }
}
