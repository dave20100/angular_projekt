import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Book } from '../model/book';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.html',
  styles: []
})

export class MainComponentComponent {
  booksRef: any;
  book: Book = new Book();
  loadedBooks: Observable<Book[]>;

  constructor(db: AngularFireDatabase) {
    this.booksRef = db.list('books');
    this.loadedBooks = this.booksRef.valueChanges();
  }

  ngOnInit() {
  }

  onSubmit()
  {
    this.booksRef.push(this.book);
  }
}
