import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { title } from 'process';
declare var firebase: any;

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

function getData(){
  firebase.database().ref('/').on('child_added', (title) => {
    console.log(title);
  })
}