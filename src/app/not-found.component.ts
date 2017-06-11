import { Component } from '@angular/core';

@Component({
    selector: 'not-found',
    template: `<h1>{{ name }}</h1>`
})
export class NotFoundComponent{
    name = 'Page Not Found';
}