import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'not-found',
    template: `
        <section class="container">
            <div class="container-item big-font">Page not found</div>
        </section>
        
    `
})

export class NotFoundComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}