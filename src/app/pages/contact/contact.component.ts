import { Component, effect, inject, model, signal } from '@angular/core';
import { ThemeService } from '../../service/theme';
import {
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  isDark = model<boolean>();
  #themeService = inject(ThemeService);
  detectChangeTheme = effect(() => {
    const changeDetected = this.#themeService.isDark();
    this.isDark.set(changeDetected);
  });
  isSubmit = signal<boolean>(false);
  formContact = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    subject: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(50)],
    }),
    text: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });
  submitEmail(e: Event) {
    e.preventDefault();
    this.isSubmit.update(() => true);
    if (this.formContact.valid) {
    }
  }
}
