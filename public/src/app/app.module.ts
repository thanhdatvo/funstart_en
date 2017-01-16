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

import { AUTH_PROVIDER } from './services/auth.service';
import { REST_PROVIDER } from './services/rest.service';
import { USER_PROVIDER } from './services/user.service';
import { CONSTANT_SERVICE } from './services/constant.service';
import { GameCollectionComponent } from './child-components/game-collection/game-collection.component';
import { GameCardDetailComponent } from './child-components/game-card-detail/game-card-detail.component';
import { AutocompleteComponent } from './child-components/autocomplete/autocomplete.component';
import { AccountDialogComponent } from './child-components/account-dialog/account-dialog.component';
import { FormLoginComponent } from './child-components/form-login/form-login.component';
import { FormRegisterComponent } from './child-components/form-register/form-register.component';
import { FormPasswordResetComponent } from './child-components/form-password-reset/form-password-reset.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { VideoPlayerComponent } from './child-components/video-player/video-player.component'; 

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
    AutocompleteComponent,
    AccountDialogComponent,
    FormLoginComponent,
    FormRegisterComponent,
    FormPasswordResetComponent,
    VideoPlayerComponent
  ],
   entryComponents:[AccountDialogComponent],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MaterialModule.forRoot(),
    FlexLayoutModule,
    routing
  ],
  providers: [
    REST_PROVIDER,
    AUTH_PROVIDER,
    USER_PROVIDER,
    CONSTANT_SERVICE,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  //  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
