import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  template: `
    <form (ngSubmit)="onRegister()">
      <input
        [(ngModel)]="userDetails.name"
        name="name"
        type="text"
        placeholder="Name"
        required
      />
      <input
        [(ngModel)]="userDetails.email"
        name="email"
        type="email"
        placeholder="Email"
        required
      />
      <input
        [(ngModel)]="userDetails.password"
        name="password"
        type="password"
        placeholder="Password"
        required
      />
      <button type="submit">Register</button>
    </form>
  `,
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class RegisterComponent {
  userDetails = { name: '', email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.register(this.userDetails).subscribe({
      next: () => {
        alert('Registration successful! Please log in.');
        this.router.navigate(['/login']);
      },
      error: (err) => console.error('Registration failed', err),
    });
  }
}
