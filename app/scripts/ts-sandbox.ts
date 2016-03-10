/// <reference path="calculator/calculator.module.ts" />


class TS_Sandbox {
    public execFn() {
        let calc = new CalculatorModule.Calculator();

        console.log(calc.add(1, 2, 3));
    }
}


var sb = new TS_Sandbox();
sb.execFn();

