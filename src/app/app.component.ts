import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="m-4">
    <nav class="title">
        <h1>Biblioteka</h1>
    </nav>
    <app-main-component></app-main-component>
  </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'Biblioteka';
}
