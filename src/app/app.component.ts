import { Component, OnInit } from '@angular/core';
import { ExchangeService } from './shared/services/exchange.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'currencycode';
  basecurrency!: string;
  targetCurrency!: string;
  amount: number = 1;
  result: number = 0
  currncycode!: string[]
  fromCoun!: string
  constructor(private _excahnge: ExchangeService) {

  }
  ngOnInit(): void {

    this._excahnge.getcodes()
      .subscribe((res => {

        console.log(res);
        this.currncycode = res

      }))
  }

  convertcurrency() {
    this._excahnge.getexcangerates(this.fromCoun)
      .subscribe((res => {
        this.result = res.conversion_rates[this.targetCurrency] * this.amount;
        console.log(this.result);

      }))
  }
  getusd(value: string) {
    this.fromCoun = value
    console.log(value);

  }
}
