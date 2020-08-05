import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { AllauthorsComponent } from './components/allauthors/allauthors.component'
import { AllbooksComponent } from './components/allbooks/allbooks.component'
import { BookComponent } from './components/book/book.component'
import { AuthorComponent } from './components/author/author.component'
import { SearchComponent } from './components/search/search.component'
import { FormbookComponent } from './components/formbook/formbook.component'
import { FormauthorComponent } from './components/formauthor/formauthor.component'


const APP_ROUTES: Routes = [
    { path : '', component: HomeComponent},
    { path : 'all-authors', component: AllauthorsComponent},
    { path : 'all-books', component: AllbooksComponent},
    { path : 'form-book', component: FormbookComponent},
    { path : 'form-book/:id', component: FormbookComponent},
    { path : 'form-author', component: FormauthorComponent},
    { path : 'form-author/:id', component: FormauthorComponent},
    { path : 'book/:id', component: BookComponent},
    { path : 'author/:id', component: AuthorComponent},
    { path : 'search/:search', component: SearchComponent},
    { path : '**', pathMatch: 'full', redirectTo: ''}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
