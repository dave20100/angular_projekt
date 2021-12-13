import { Component } from '@angular/core';
import { collection } from 'firebase/firestore';


@Component({
  selector: 'app-root',
  template: `
<nav class="nav">
    <h1>Biblioteka</h1>
</nav>
<app-main-component></app-main-component>
  `,
  styles: []
})
export class AppComponent {
  title = 'Biblioteka';
}
