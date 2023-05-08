import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match-result',
  templateUrl: './match-result.component.html',
  styleUrls: ['./match-result.component.scss']
})
export class MatchResultComponent implements OnInit,OnDestroy {
  public matchData:any;

  constructor(private _router:Router) { }


  ngOnInit(): void {
    if(localStorage.getItem('calculateData')){
      this.matchData=JSON.parse(localStorage.getItem('calculateData')!);
    }

    console.log(this.matchData)

  }

  calculateAgain(){
    this._router.navigate(['love-calculate'])
  }
  ngOnDestroy(): void {
   localStorage.removeItem('calculateData');
  }
}
