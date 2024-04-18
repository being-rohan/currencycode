import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Currency } from '../model/interface';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  currncyurl = `${environment.baseurl}/latest/`
  constructor(private _http: HttpClient) { }


  getexcangerates(basecode: string = 'USD'): Observable<any> {
    let finalurl = `${this.currncyurl}/${basecode}`
    console.log(finalurl);

    return this._http.get(finalurl)
  }

  getcodes(basecode: string = 'USD'): Observable<any> {
    return this._http.get(`${this.currncyurl}/${basecode}`)
      .pipe(
        map((res: any) => {
          let arr: Array<any> = []
          for (const key in res.conversion_rates) {
            arr.push(key)

          }
          return arr
        })
      )
  }






}
