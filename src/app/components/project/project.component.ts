import { Component, effect, inject, input, model, signal } from '@angular/core';
import { linkType } from '../../utils/type';
import { ThemeService } from '../../service/theme';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  titleProject = input.required<string>();
  stackList = input.required<string[]>();
  description = input.required<string>();
  imagePath = input.required<string>();
  links = input.required<linkType[]>();
  isDark = model<boolean>();
  #themeService = inject(ThemeService);
  effectChangeTheme = effect(() => {
    const detectChange = this.#themeService.isDark();
    this.isDark.set(detectChange);
  });
}
