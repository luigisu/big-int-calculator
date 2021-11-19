import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class CalculatorService {
  constructor(private http: HttpClient) {}

  calculate(multiplicand: string, multiplier: string) {
    return this.http.post(`${environment.url_base}multiplication`, {
      multiplicand: multiplicand,
      multiplier: multiplier,
    });
  }

  list() {
    return this.http.get(`${environment.url_base}list`);
  }
  clear_event_history() {
    return this.http.put(`${environment.url_base}disableAll`, {});
  }
}
