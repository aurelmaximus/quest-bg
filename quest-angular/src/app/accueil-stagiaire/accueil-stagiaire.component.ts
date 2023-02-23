import { Component } from '@angular/core';
import { MatiereHttpService } from '../matiere/matiere-http.service';
import { Matiere } from '../model';

@Component({
  selector: 'app-accueil-stagiaire',
  templateUrl: './accueil-stagiaire.component.html',
  styleUrls: ['./accueil-stagiaire.component.scss']
})
export class AccueilStagiaireComponent {
  
  constructor (private matiereService: MatiereHttpService) {
    
  }
  list(): Array<Matiere> {
    return this.matiereService.findAll();
  }
  
}
