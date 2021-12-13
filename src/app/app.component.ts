import { Component } from '@angular/core';
import { collection } from 'firebase/firestore';


@Component({
  selector: 'app-root',
  template: `

<nav class="nav">
    <h1>Biblioteka</h1>
</nav>

<div class="container">


<div class="dodawanie_ksiazki">

    <form action="#" method="post">

        <label for="tytul">Podaj tytuł książki:</label>
        <br>
        <input type="text" name="tytul">
        <br>
        <label for="autor">Podaj autora książki:</label>
        <br>
        <input type="text" name="autor">
        <br>
        <br>
        <input type="submit" value="Dodaj">
    </form>

</div>

<div class="wyswietlanie_ksiazek">
    <p id="pole"></p>
</div>

</div>


    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'angularFirst';
}
