import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { MaterialModule } from '@angular/material'
import { routing } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { FooterComponent } from './shared-components/footer/footer.component';

import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { TopicComponent } from './components/topic/topic.component';
import { UserComponent} from './components/user/user.component';
import { SidebarComponent } from './shared-components/sidebar/sidebar.component';

import { GameCardComponent} from './child-components/game-card/game-card.component';

import { REST_PROVIDER } from './services/rest.service';
import { CONSTANT_SERVICE } from './services/constant.service';
import { GameCollectionComponent } from './child-components/game-collection/game-collection.component';
import { GameCardDetailComponent } from './child-components/game-card-detail/game-card-detail.component';
import { AutocompleteComponent } from './child-components/autocomplete/autocomplete.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GameComponent,
    TopicComponent,
    UserComponent,
    GameCardComponent,
    SidebarComponent,
    GameCollectionComponent,
    GameCardDetailComponent,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MaterialModule.forRoot(),
    routing
  ],
  providers: [
    REST_PROVIDER,
    CONSTANT_SERVICE,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  //  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
