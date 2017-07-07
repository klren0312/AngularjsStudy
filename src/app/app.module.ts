import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';//NgModel lives here
import { HttpModule }           from '@angular/http';
import { RouterModule }         from '@angular/router';

//imports for loading & configuring the in-memory web api
//cnpm install angular-in-memory
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService}   from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroService }          from './hero-detail/hero.service';
import { appRoutes }            from './app.routes';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroesSearchComponent } from './heroes-search/heroes-search.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroesComponent,
    HeroesSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
