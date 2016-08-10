import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: require('./../view/app.jade')
})
export class App {
    model: string = "brokenq"
}
