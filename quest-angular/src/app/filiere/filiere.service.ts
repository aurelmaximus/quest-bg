import { Injectable } from '@angular/core';
import { Filiere } from '../model';

@Injectable({
  providedIn: 'root'
})
export class FiliereService {

  filieres: Array<Filiere> = new Array<Filiere>();

  constructor() { 
    this.filieres.push(new Filiere(13, 0, "SOPRA/JAVA", "2022-12-13", "2023-03-06"));
    this.filieres.push(new Filiere(25, 1, "DEVOPS", "2023-01-31", "2023-05-06"));
  }

  findAll(): Array<Filiere> {
    return this.filieres;
  }

  findById(id: number): Filiere {
    return this.filieres.find(fil => fil.id == id);
  }

  create(filiere: Filiere): void {
    let maxId = 0;

    this.filieres.forEach(fil => {
      if(fil.id > maxId) {
        maxId = fil.id;
      }
    });
    filiere.id = maxId + 1;
    filiere.version = 0;

    this.filieres.push(filiere);
  }

  update(filiere: Filiere): void {
    let idx: number;

    idx = this.filieres.findIndex(fil => fil.id == filiere.id);

    filiere.version++;

    this.filieres[idx] = filiere;
  }

  remove(id: number): void {
    let idx: number = this.filieres.findIndex(fil => fil.id == id);

    this.filieres.splice(idx, 1);
  }
}
