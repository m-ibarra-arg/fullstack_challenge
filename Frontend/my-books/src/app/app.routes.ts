import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { AllauthorsComponent } from './components/allauthors/allauthors.component'
import { AllbooksComponent } from './components/allbooks/allbooks.component'
import { BookComponent } from './components/book/book.component'
import { SearchComponent } from './components/search/search.component'


const APP_ROUTES: Routes = [
    { path : '', component: HomeComponent},
    { path : 'all-authors', component: AllauthorsComponent},
    { path : 'all-books', component: AllbooksComponent},
    { path : 'book/:id', component: BookComponent},
    { path : 'search/:search', component: SearchComponent},
    { path : '**', pathMatch: 'full', redirectTo: ''}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
