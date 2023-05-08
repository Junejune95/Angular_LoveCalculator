import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/app/components/about/about.component';
import { CalculatorPageComponent } from 'src/app/components/calculator-page/calculator-page.component';
import { FamousLoveQuoteComponent } from 'src/app/components/famous-love-quote/famous-love-quote.component';
import { InitPageComponent } from 'src/app/components/init-page/init-page.component';
import { MatchResultComponent } from 'src/app/components/match-result/match-result.component';

const routes: Routes = [
  {
    path:'',
    component:InitPageComponent
  },
  {
    path:'love-calculate',
    component:CalculatorPageComponent
  },
  {
    path:'love-result',
    component:MatchResultComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'famous-love-quote',
    component:FamousLoveQuoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
