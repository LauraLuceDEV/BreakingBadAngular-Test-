import { Component, OnDestroy, OnInit } from '@angular/core';
import { BBCharacter } from 'src/app/Models/ICharacter';
import { BreakingBadAPIService } from 'src/app/Services/breaking-bad-api.service';
import { CustomizationService } from 'src/app/Services/customization.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  public characterList: BBCharacter[] = [];
  public mainCharacterList: BBCharacter[] = [];
  public secondaryCharacterList: BBCharacter[] = [];

  positionFooter: string;

  //-------
  // CICLO DE VIDA
  //-------

  constructor(private bbService: BreakingBadAPIService,
    private customiServ: CustomizationService) { }

  ngOnInit(): void {
    this.customiServ.setFooterStyle('position-cero');
    this.positionFooter = this.customiServ.footerStyle;
    const carrouselCells = document.getElementsByClassName('carousel-cells');
    // Array.prototype.forEach.call(carrouselCells, (item) => item.attr("style", "width: auto"));
    this.chargeData();
  }

  ngOnDestroy(): void {}


  //-------
  // MÉTODOS
  //-------

  // Nos prepara y carga los datos de nuestra página provenientes de la API
  chargeData() {
    this.bbService.getAllcharacters().subscribe( (resp)=>{
      resp.forEach(element =>{
        this.characterList.push(element);
      })

      // Personajes principales
      this.mainCharacterList = this.characterList.splice(0,9);

      // Personajes secundarios
      this.secondaryCharacterList = this.characterList.splice(0,10);
    })

  }

}
