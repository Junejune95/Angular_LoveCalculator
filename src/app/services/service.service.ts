import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { API_URL } from 'src/app/interfaces/constants';
import { InputForm } from 'src/app/interfaces/form';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private _http: HttpClient) {

  }


  getMatch(inputData: InputForm): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("fname", inputData.fname);
    queryParams = queryParams.append("sname", inputData.sname);

    return this._http.get(API_URL,{
      params:queryParams,
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '',  //Enter Your RapidAPI Key
        'X-RapidAPI-Host': 'the-love-calculator.p.rapidapi.com'
      })
    });
  }
}
