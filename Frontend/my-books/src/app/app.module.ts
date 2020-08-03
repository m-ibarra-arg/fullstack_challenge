import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes 
import { APP_ROUTING } from './app.routes'

// Services
import { BooksService } from './services/books.service'
import { AuthorsService } from './services/authors.service'


// Components
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AllbooksComponent } from './components/allbooks/allbooks.component';
import { AllauthorsComponent } from './components/allauthors/allauthors.component';
import { BookComponent } from './components/book/book.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    AllbooksComponent,
    AllauthorsComponent,
    BookComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    BooksService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
