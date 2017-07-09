import { Routes } from "@angular/router"
import { CategoryListComponent } from "./category-list/category-list.component"
import { CategoryDetailComponent } from "./category-detail/category-detail.component"
import { NotFoundComponent } from "./errors/not-found.component"
import { QuoteListComponent } from "./quote-list/quote-list.component";
import { QuoteDetailComponent } from "./quote-detail/quote-detail.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { LogoutComponent } from "./logout/logout.component";
import { ValidateComponent } from "./validate/validate.component";
import { NotValidComponent } from "./errors/not-valid.component";
import { RandomQuoteComponent } from "./random-quote/random-quote.component";


export const appRoutes: Routes = [
    { path: "", component: RandomQuoteComponent },
    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComponent },
    { path: "logout", component: LogoutComponent },
    { path: "validate", component: ValidateComponent },
    { path: "quote", component: QuoteListComponent },
    { path: "quote/:id", component: QuoteDetailComponent },
    { path: "category", component: CategoryListComponent },
    { path: "category/:id", component: CategoryDetailComponent},
    { path: "404", component: NotFoundComponent },
    { path: "400", component: NotValidComponent },
    { path: "**", redirectTo: "404" }
]