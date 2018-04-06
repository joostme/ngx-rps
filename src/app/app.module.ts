import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from 'environments/environment';
import { AppComponent } from './app.component';
import { RpsModule } from './rps-module/rps.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
        RpsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
