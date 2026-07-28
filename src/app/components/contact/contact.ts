import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';
import { IconComponent } from '../shared/icon/icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, IconComponent],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class ContactComponent {
  private formBuilder = inject(FormBuilder);

  readonly contactForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    content: ['', [Validators.required, Validators.minLength(20)]],
  });

  isSending = false;
  statusType: 'success' | 'error' | null = null;
  statusMessage = '';

  private readonly emailConfig = environment.emailjs;

  constructor() {
    if (this.isEmailJsConfigured()) {
      emailjs.init(this.emailConfig.publicKey);
    }
  }

  async submitForm(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    if (!this.isEmailJsConfigured()) {
      this.statusType = 'error';
      this.statusMessage = 'contact.form.configMissing';
      return;
    }

    this.isSending = true;
    this.statusType = null;
    this.statusMessage = '';

    try {
      const { name, email, content } = this.contactForm.getRawValue();

      await emailjs.send(this.emailConfig.serviceId, this.emailConfig.templateId, {
        from_name: name,
        from_email: email,
        reply_to: email,
        message: content,
        to_name: this.emailConfig.recipientName,
      });

      this.statusType = 'success';
      this.statusMessage = 'contact.form.success';
      this.contactForm.reset({ name: '', email: '', content: '' });
    } catch {
      this.statusType = 'error';
      this.statusMessage = 'contact.form.error';
    } finally {
      this.isSending = false;
    }
  }

  get nameControl() {
    return this.contactForm.controls.name;
  }

  get emailControl() {
    return this.contactForm.controls.email;
  }

  get contentControl() {
    return this.contactForm.controls.content;
  }

  private isEmailJsConfigured(): boolean {
    return ![
      this.emailConfig.serviceId,
      this.emailConfig.templateId,
      this.emailConfig.publicKey,
    ].some((value) => value.startsWith('YOUR_') || value.length === 0);
  }
}
