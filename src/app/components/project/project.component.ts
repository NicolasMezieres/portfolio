import { Component, input } from '@angular/core';
import { linkType } from '../../utils/type';

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
}
