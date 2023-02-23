import { Injectable } from '@angular/core';
import { Stagiaire } from '../model';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {

  stagiaires: Array<Stagiaire> = new Array<Stagiaire>();
  civilites: Map<string, string> = new Map<string,string>();

  constructor() { 
    this.stagiaires.push(new Stagiaire(3, 0, "MME", "LANSELLE", "Delphine", "delphine@gmail.com", "1994-04-17", "BAC_5"));
    this.stagiaires.push(new Stagiaire(5, 0, "M", "DIOT", "Arthur", "arthur@hotmail.com", "1996-05-03", "BAC_5"));
  
    this.civilites.set("M", "Monsieur");
    this.civilites.set("MME", "Madame");
    this.civilites.set("NB", "Non Binaire");
  }
  
  findAllCivilite(): Map<string, string> {
    return this.civilites;
  }

  findAll(): Array<Stagiaire> {
    return this.stagiaires;
  }

  findById(id: number): Stagiaire {
    return this.stagiaires.find(stag => stag.id == id);
  }

  create(stagiaire: Stagiaire): void {
    let maxId = 0;

    this.stagiaires.forEach(stag => {
      if(stag.id > maxId) {
        maxId = stag.id;
      }
    });
    stagiaire.id = maxId + 1;
    stagiaire.version = 0;

    this.stagiaires.push(stagiaire);
  }

  update(stagiaire: Stagiaire): void {
    let idx: number;

    idx = this.stagiaires.findIndex(stag => stag.id == stagiaire.id);

    stagiaire.version++;

    this.stagiaires[idx] = stagiaire;
  }

  remove(id: number): void {
    let idx: number = this.stagiaires.findIndex(stag => stag.id == id);

    this.stagiaires.splice(idx, 1);
  }
}
