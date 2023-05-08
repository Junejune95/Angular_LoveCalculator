import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init-page',
  templateUrl: './init-page.component.html',
  styleUrls: ['./init-page.component.scss']
})
export class InitPageComponent implements OnInit,OnDestroy {

  constructor(private _router:Router) { }
  

  ngOnInit(): void {
    this.autoTyping();
  }
  interval: any;

  autoTyping() {
    const text = 'To find out what the chances for you and your dream partner are....';
    let str = text.split("");
    let el = document.getElementById('text');


    this.interval = setInterval(() => {
      if (el != null) {
        str.length > 0 ? el.innerHTML += str.shift() : this._router.navigate(['love-calculate']);
      }
    }, 250)

    // this.running= setTimeout(animate, 90);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
