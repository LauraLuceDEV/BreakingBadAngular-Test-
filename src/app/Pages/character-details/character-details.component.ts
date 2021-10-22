import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BBCharacter } from 'src/app/Models/ICharacter';
import { BreakingBadAPIService } from 'src/app/Services/breaking-bad-api.service';
import { CustomizationService } from 'src/app/Services/customization.service';


@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit, OnDestroy {
  characterID : number;
  character : BBCharacter;
  positionFooter: string;

  //-------
  // CICLO DE VIDA
  //-------

  constructor(private actRoute: ActivatedRoute,
    private bbService: BreakingBadAPIService,
    private customiServ: CustomizationService) { }


  ngOnInit(): void {
    this.characterID = Number(this.actRoute.snapshot.paramMap.get('id'));
    this.customiServ.setFooterStyle('position-absolute');
    this.positionFooter = this.customiServ.footerStyle;
    this.chargeData();
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


