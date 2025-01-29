import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Simple Calculator';
  isInitialized = false;

  ngOnInit() {
    this.isInitialized = true;
  }

  sum(a: number, b: number) {
    return a + b;
  }
  subtract(a: number, b: number) {
    return a - b;
  }
  multiply(a: number, b: number) {
    return a * b;
  }
  divide(a: number, b: number) {
    return a / b;
  }
  fibonacci(n: number): number {
    if (n <= 1) {
      return n;
    }
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }
  square(a: number) {
    return a * a;
  }
}
