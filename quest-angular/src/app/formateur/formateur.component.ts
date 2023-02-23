import { Component } from '@angular/core';
import { FiliereHttpService } from '../filiere/filiere-http.service';
import { MatiereHttpService } from '../matiere/matiere-http.service';
import { Filiere, Formateur, Matiere } from '../model';
import { FormateurHttpService } from './formateur-http.service';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.scss']
})
export class FormateurComponent {

  formFormateur: Formateur = null;



  constructor(private formateurService: FormateurHttpService, private filiereService: FiliereHttpService,private matiereService: MatiereHttpService) {
  }

  list(): Array<Formateur> {
    return this.formateurService.findAll();
  }

  listFilieres(): Array<Filiere> {
    return this.filiereService.findAll();
  }

  listMatieres(): Array<Matiere> {
    return this.matiereService.findAll();
  }


}



