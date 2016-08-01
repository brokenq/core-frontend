import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <p>{{model}}</p>
    `
})
export class App {
    model: string = "brokenq"
}
