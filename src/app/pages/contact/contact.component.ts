import { Component, effect, inject, model, signal } from '@angular/core';
import { ThemeService } from '../../service/theme';
import {
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EmailService } from '../../service/email/email.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  toastMessage = signal<string>('');
  isVisibleToast = signal<boolean>(false);
  isErrorToast = signal<boolean>(false);
  isDark = model<boolean>();
  #themeService = inject(ThemeService);
  #emailService = inject(EmailService);
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
    message: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });
  submitEmail(e: Event) {
    e.preventDefault();
    this.isSubmit.update(() => true);
    if (this.formContact.valid) {
      const data = this.formContact.getRawValue();
      this.#emailService.sendEmail(data).subscribe({
        next: (res) => {
          this.toastMessage.update(() => res.message);
          this.isErrorToast.update(() => false);
          this.showToast();
          this.formContact.reset();
          this.isSubmit.update(() => false);
        },
        error: (err: { error: { message: string } }) => {
          this.toastMessage.update(() => err.error.message);
          this.isErrorToast.update(() => true);
          this.showToast();
        },
      });
    }
  }
  showToast() {
    this.isVisibleToast.update(() => true);
    setTimeout(() => {
      this.isVisibleToast.update(() => false);
    }, 3000);
  }
}
