import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'not-valid',
    template: `
        <section class="container">
            <div class="container-item big-font">Your email has not confirmed yet.</div>
        </section>
        
    `
})

export class NotValidComponent implements OnInit, OnDestroy {
    timeout: any

    constructor(private router: Router) { }

    ngOnInit() {
        this.timeout = setTimeout(() => this.router.navigate(["login"]), 2000) 
    }

    ngOnDestroy() {
        if (this.timeout)
            clearTimeout(this.timeout)
    }
}