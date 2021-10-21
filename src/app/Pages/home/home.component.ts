import { Component, OnDestroy, OnInit } from '@angular/core';
import { BBCharacter } from 'src/app/Models/ICharacter';
import { BreakingBadAPIService } from 'src/app/Services/breaking-bad-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  public characterList: BBCharacter[] = [];
  public mainCharacterList: BBCharacter[] = [];
  public secondaryCharacterList: BBCharacter[] = [];

  //-------
  // CICLO DE VIDA
  //-------

  constructor(private bbService: BreakingBadAPIService) { }

  ngOnInit(): void {
    const carrouselCells = document.getElementsByClassName('carousel-cells');
    console.log(carrouselCells);

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
