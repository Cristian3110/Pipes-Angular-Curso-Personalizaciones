import { Pipe, PipeTransform } from '@angular/core';
// importando el DomSanitizer para la verificación segura del enlace
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro',
})
export class DomseguroPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(value: string, ...args: unknown[]): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
    return null;
  }
}
