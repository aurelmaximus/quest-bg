import { Component } from '@angular/core';
import { FiliereHttpService } from '../filiere/filiere-http.service';
import { FiliereService } from '../filiere/filiere.service';
import { Filiere, Ordinateur, Stagiaire } from '../model';
import { OrdinateurHttpService } from '../ordinateur/ordinateur-http.service';
import { StagiaireHttpService } from './stagiaire-http.service';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.scss']
})
export class StagiaireComponent {
  formStagiaire: Stagiaire = null;

  ordinateurOrphans: Array<Ordinateur>;
  filiereOrphans: Array<Filiere>;

  constructor(private stagiaireService: StagiaireHttpService, private ordinateurService: OrdinateurHttpService,private filiereService: FiliereHttpService) {
  }

  list(): Array<Stagiaire> {
    return this.stagiaireService.findAll();
  }

  listCivilites(): Map<string, string> {
    return this.stagiaireService.findAllCivilite();
  }

  listOrdinateurs(): Array<Ordinateur> {
    return this.ordinateurOrphans;
  }

   listFilieres(): Array<Filiere> {
    return this.filiereOrphans;
  }

  add(): void {
    this.formStagiaire = new Stagiaire();
    this.formStagiaire.ordinateur = new Ordinateur();
    this.formStagiaire.filiere = new Filiere();
    
    this.ordinateurService.findAllOrphans().subscribe(resp => {
      this.ordinateurOrphans = resp;
    });

    this.filiereService.findAllOrphans().subscribe(resp => {
      this.filiereOrphans = resp;
    });
  }

  edit(id: number): void {
    this.stagiaireService.findById(id).subscribe(response => {
      this.formStagiaire = response;

      if(!this.formStagiaire.ordinateur) {
        this.formStagiaire.ordinateur = new Ordinateur();
        this.ordinateurService.findAllOrphans().subscribe(resp => {
          this.ordinateurOrphans = resp;
        });
      } else {
        this.ordinateurService.findAllOrphans(this.formStagiaire.ordinateur.id).subscribe(resp => {
          this.ordinateurOrphans = resp;
        });
      }

      if(!this.formStagiaire.filiere) {
        this.formStagiaire.filiere = new Filiere();
        this.filiereService.findAllOrphans().subscribe(resp => {
          this.filiereOrphans = resp;
        });
      } else {
        this.filiereService.findAllOrphans(this.formStagiaire.filiere.id).subscribe(resp => {
          this.filiereOrphans = resp;
        });
      }
    });
  }

  save(): void {
    if(this.formStagiaire.id) { // UPDATE
      this.stagiaireService.update(this.formStagiaire);
    } else { // CREATE
      this.stagiaireService.create(this.formStagiaire);
    }

    this.cancel();
  }

  remove(id: number): void {
    this.stagiaireService.remove(id);
  }

  cancel(): void {
    this.formStagiaire = null;
  }
}
