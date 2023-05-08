import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { InputForm } from 'src/app/interfaces/form';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-calculator-page',
  templateUrl: './calculator-page.component.html',
  styleUrls: ['./calculator-page.component.scss']
})
export class CalculatorPageComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public isLoading:boolean=false;

  public loveForm = this.fb.group({
    yourName: ['', Validators.required],
    crushName: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private _service: ServiceService,private _router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.loveForm.valid)
    if (this.loveForm.valid == false) {
      return;
    }
    this.isLoading=true;
    const temp: InputForm = {
      fname: this.loveForm.value.yourName!,
      sname: this.loveForm.value.crushName!
    }
    this.subscription = this._service.getMatch(temp).subscribe((result) => {
      localStorage.setItem('calculateData',JSON.stringify(result));
      setTimeout(() => {
        this.isLoading=false;
        this._router.navigate(['love-result']);
      }, 2600);
  
    });
  
  }



  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
