import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FibComponent } from './fib/fib.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: '', component: FibComponent },
  { path: 'second', component: SecondComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
