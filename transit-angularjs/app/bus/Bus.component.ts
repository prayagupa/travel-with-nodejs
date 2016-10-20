/**
 * Created by prayagupd
 * on 10/18/16.
 */

import {Component} from '@angular/core';

export class Bus {
    constructor(
    busNumber: string,
    from: string,
    to: string) { }
}

@Component({
    selector: 'BusView',
    templateUrl: 'app/bus/bus-form.component.html'
})

export class BusComponent {
    title = 'Bus';
    bus: Bus = {
        busNumber: "41",
        from: 'North Seattle',
        to : 'Downtown'
    };
    submitted = false;
    onSubmit() { this.submitted = true; }
    get diagnostic() { return JSON.stringify(this.bus); }
}

