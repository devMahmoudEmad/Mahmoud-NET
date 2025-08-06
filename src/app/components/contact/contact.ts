import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  email = 'mahmoudemad7521@gmail.com';
  phone = '+20 127 088 0911';
  location = 'El Shorouk City, Cairo, Egypt';
  githubUrl = 'https://github.com/devMahmoudEmad';
  linkedinUrl = 'https://www.linkedin.com/in/mahmoud-emad-373970216/';

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      // For now, just show a success message
      // In a real application, you would send the form data to your backend
      this.snackBar.open('Thank you for your message! I\'ll get back to you soon.', 'Close', {
        duration: 5000,
        panelClass: ['success-snackbar']
      });
      this.contactForm.reset();
    } else {
      this.snackBar.open('Please fill in all required fields correctly.', 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
    }
  }

  copyEmail(): void {
    navigator.clipboard.writeText(this.email).then(() => {
      this.snackBar.open('Email copied to clipboard!', 'Close', {
        duration: 2000,
        panelClass: ['success-snackbar']
      });
    });
  }

  openEmailClient(): void {
    window.location.href = `mailto:${this.email}`;
  }

  callPhone(): void {
    window.location.href = `tel:${this.phone}`;
  }
}
