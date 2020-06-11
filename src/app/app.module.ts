import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
// configuración de idiomas a español
import { registerLocaleData } from '@angular/common';
import localES from '@angular/common/locales/es';
import localFR from '@angular/common/locales/fr';

// the second parameter 'fr-FR' is optional
registerLocaleData(localES);
registerLocaleData(localFR);

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [AppComponent, CapitalizadoPipe, DomseguroPipe],
  imports: [BrowserModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
