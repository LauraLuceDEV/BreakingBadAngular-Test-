import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import {BBCharacter} from '../Models/ICharacter';

@Injectable({
  providedIn: 'root'
})
export class BreakingBadAPIService {
  API_URL = `https://www.breakingbadapi.com/api`;

  constructor(private request: HttpClient) { }

  // Nos devuelve a todos los personajes
  getAllcharacters(): Observable<BBCharacter[]>{
    let url = `${this.API_URL}/characters`
    return this.request.get<BBCharacter[]>(url);
  }

  // Nos devuelve a un personaje a través de su ID
  getcharacterByID(id: number): Observable<BBCharacter[]>{
    let url = `${this.API_URL}/characters/${id}`
    console.log(url)
    return this.request.get<BBCharacter[]>(url);
  }

  // Nos devuelve a un personaje aleatorio
  getRandomcharacter(): Observable<BBCharacter>{
    let url = `${this.API_URL}/character/random`
    return this.request.get<BBCharacter>(url);
  }
}
