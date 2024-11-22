import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { TrainerModule } from './trainer/trainer.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PokemonModule, TrainerModule, HttpClientModule, RouterModule ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
