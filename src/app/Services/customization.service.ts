import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomizationService {
  public footerStyle;

  constructor() {
    this.footerStyle = 'position-cero';
  }

  setFooterStyle(style: string){
    this.footerStyle = style;
  }
}
