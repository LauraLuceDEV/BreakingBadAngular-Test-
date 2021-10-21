import { Component, Input, OnInit } from '@angular/core';
import { BBCharacter } from '../../Models/ICharacter';

@Component({
  selector: 'character-container',
  templateUrl: './character-container.component.html',
  styleUrls: ['./character-container.component.css']
})
export class CharacterContainerComponent implements OnInit {
  @Input('character') character?: BBCharacter;

  constructor() {}

  ngOnInit(): void {}


  GoToCharacterDetails(id : number) {
  }
}
