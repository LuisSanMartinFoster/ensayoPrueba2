import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private personajes:BehaviorSubject<any> = new BehaviorSubject(null);
  private personaje: BehaviorSubject<any> = new BehaviorSubject(null);

  public obtenerPersonajes(){
    return this.personajes.asObservable();
  }
  public personajesValue(personajes:any){
    this.personajes.next(personajes)
  }

  constructor() { }
}
