import { Component, input } from '@angular/core';
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
  // isDark: boolean = false;
  // constructor(private themeService: ThemeService) {
  //   this.isDark = themeService.getTheme();
  // }
}
