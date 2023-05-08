import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorPageComponent } from 'src/app/components/calculator-page/calculator-page.component';
import { InitPageComponent } from 'src/app/components/init-page/init-page.component';

const routes: Routes = [
  {
    path:'',
    component:InitPageComponent
  },
  {
    path:'love-calculate',
    component:CalculatorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
