import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BBCharacter } from 'src/app/Models/ICharacter';
import { BreakingBadAPIService } from 'src/app/Services/breaking-bad-api.service';


@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit, OnDestroy {
  characterID : number;
  character : BBCharacter;

  //-------
  // CICLO DE VIDA
  //-------

  constructor(private actRoute: ActivatedRoute,
    private bbService: BreakingBadAPIService) { }


  ngOnInit(): void {
    this.characterID = Number(this.actRoute.snapshot.paramMap.get('id'));
    this.chargeData();
    console.log(this.character)
  }

  ngOnDestroy(): void {}

  //-------
  // MÉTODOS
  //-------
  async chargeData() {
    this.bbService.getcharacterByID(this.characterID).subscribe( (resp) => {
      console.log(resp[0])
      this.character = resp[0]
    });
  }
}


