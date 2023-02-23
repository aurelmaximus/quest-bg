import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatiereHttpService } from '../matiere/matiere-http.service';
import { Matiere } from '../model';

@Component({
  selector: 'app-accueil-stagiaire',
  templateUrl: './accueil-stagiaire.component.html',
  styleUrls: ['./accueil-stagiaire.component.scss']
})
export class AccueilStagiaireComponent {
  id: number;

  constructor (private matiereService: MatiereHttpService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.id=params["id"];
      });
  }
  list(): Array<Matiere> {
    return this.matiereService.findAll();
  }
  
}
