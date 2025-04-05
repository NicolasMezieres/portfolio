import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { jamGithub } from '@ng-icons/jam-icons';
import { bootstrapLinkedin } from '@ng-icons/bootstrap-icons';
@Component({
  selector: 'app-home .flex-baseline',
  imports: [NgIcon],
  viewProviders: [provideIcons({ bootstrapLinkedin, jamGithub })],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
