import { Component } from '@angular/core';
import { ProjectComponent } from "../../components/project/project.component";

@Component({
  selector: 'app-projects .flex-baseline',
  imports: [ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {}
