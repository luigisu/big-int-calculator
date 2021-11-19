import { Component, OnInit } from "@angular/core";
import { CalculatorService } from "src/app/services/calculator.service";
import Swal from "sweetalert2";
import { isNumber } from "util";
@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.css"],
})
export class CalculatorComponent implements OnInit {
  multiplicand: string = "";
  multiplier: string = "";
  event_history: any = [];
  constructor(private calculatorService: CalculatorService) {}

  ngOnInit() {
    this.list();
  }

  async calculate(multiplicand: string, multiplier: string) {
    if (multiplicand === "" && multiplier === "") {
      Swal.fire(
        "warning",
        "multiplicand and multiplier are required",
        "warning"
      );
    } else if (!(/^\d+$/.test(multiplicand) && /^\d+$/.test(multiplier))) {
      Swal.fire(
        "warning",
        "multiplicand and multiplier must be integers",
        "warning"
      );
    } else {
      try {
        let result: any = await this.calculatorService
          .calculate(multiplicand, multiplier)
          .toPromise();
        this.list();
        console.log(result);
        Swal.fire("Result", result.body.result, "success");
      } catch (error) {
        console.log(error.error);
        Swal.fire("error", error.error.error, "error");
      }
    }
  }

  async list(retry?) {
    try {
      let result: any = await this.calculatorService.list().toPromise();
      this.event_history = result.body;
    } catch (error) {
      if (!retry) this.list(1);
      console.log(error.error);
    }
  }

  async clear_event_history() {
    try {
      this.event_history = [];
      let result: any = await this.calculatorService
        .clear_event_history()
        .toPromise();
    } catch (error) {
      console.log(error.error);
    }
  }
  re_calcule(item) {
    this.multiplicand = item.multiplicand;
    this.multiplier = item.multiplier;
  }
}
