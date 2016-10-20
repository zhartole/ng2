import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import './rxjs-extensions';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './in-memory-data.service';


import { HeroService } from "./hero.service"
import { HeroDetailComponent } from './hero-detail.component';
import { AppComponent }   from './app.component';
import { HeroesComponent }   from './heroes.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroSearchComponent }   from './hero-search.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
    imports: [ BrowserModule, FormsModule, AppRoutingModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService)],
    declarations: [ AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent, HeroSearchComponent],
    providers: [HeroService],
    bootstrap:    [ AppComponent ],
})
export class AppModule { }
