import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/app-game.component';
import { LoginComponent } from './components/login/login.component';
import { MyGameComponent } from './components/my-game/app-my-game.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GameComponent,
    MyGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
