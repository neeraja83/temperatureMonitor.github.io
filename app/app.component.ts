import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
})
export class AppComponent {
    public number1: string ;
    public number2: string ;
    public number3: string ;
    public number4: string ;
    public number5: string ;
    public result: Number = 0;
    public total: Number = 0;

    calculate() {
            this.result = parseInt(this.number2, 10) + parseInt(this.number3, 10);
            console.log(this.result);
    }
}
