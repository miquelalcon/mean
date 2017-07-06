import { NgModule } from "@angular/core"
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from "./app.component";
import { appRoutes } from "./routes"
import { QuotesApiService } from "../services/quote.api.service";
import { RandomQuoteComponent } from "./random-quote.component";
import { CategoryListComponent } from "./category-list/category-list.component";
import { CategoryDetailComponent } from "./category-detail/category-detail.component";
import { LoginComponent } from "./login/login.component";
import { NotFoundComponent } from "./errors/not-found.component"

import { QuoteListComponent } from "./quote-list/quote-list.component";
import { QuoteDetailComponent } from "./quote-detail/quote-detail.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { QuoteFormComponent } from "./quote-list/quote-form.component";
import { AuthService } from "../services/auth.service";

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        HttpModule,
        FormsModule,
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        RandomQuoteComponent,
        CategoryListComponent,
        CategoryDetailComponent,
        QuoteListComponent,
        QuoteDetailComponent,
        QuoteFormComponent,
        NavBarComponent,
        NotFoundComponent,
        LoginComponent
    ],
    providers: [
        QuotesApiService,
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
