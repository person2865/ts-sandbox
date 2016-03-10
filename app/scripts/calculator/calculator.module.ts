module CalculatorModule {
    
    export class Calculator {

        public add(...args) {
            console.log('add ... ', args);
            return this.doOperation('add', args);

        }

        public subtract(...args) {
            console.log('subtract ... ', args);
            return this.doOperation('subtract', args);

        }

        public multiply(...args) {
            console.log('multiply ... ', args);
            return this.doOperation('multiply', args);

        }

        private doOperation(operator, operands) {
            console.log('doOperation:: operator ... ', operator);
            console.log('doOperation:: operands ... ', operands);

            let result = 0;
            for (let n of operands) {
                if (!isNaN(parseFloat(n))) {

                    switch(operator) {
                        case 'add':
                            result += n;
                            break;
                        case 'subtract':
                            result -= n;
                            break;
                        case 'multiply':
                            result *= n;
                            break;
                        default:
                            this.toString('invalid operation!');
                    }

                } else {

                    return this.toString(`cannot ${operator} because ${n} is not a valid number.`);

                }
            }

            return this.toString(`${operator}ing ${operands} results in ${result}`);
        }

        private toString(msg) {
            return `Calculator says... ${msg}`;
        }

    }


}