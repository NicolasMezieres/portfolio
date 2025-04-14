import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDark = signal<boolean>(false);
  counter: number = 0;
  changeTheme() {
    this.isDark.update((value) => !value);
    let main = document.querySelector('main');
    main?.classList.add('duration-[2s]');
    this.counter++;
    setTimeout(() => {
      this.counter--;
      if (this.counter === 0) {
        main?.classList.remove('duration-[2s]');
      }
    }, 2000);
  }
  getTheme() {
    return this.isDark();
  }
}
