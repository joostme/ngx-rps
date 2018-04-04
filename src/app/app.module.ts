import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { RpsModule } from './rps-module/rps.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RpsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
