import { Component } from '@angular/core';
import { Filiere, Formateur, Matiere } from '../model';
import { MatiereHttpService } from './matiere-http.service';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.scss']
})
export class MatiereComponent {
formMatiere: Matiere=null;
filiereOrphans: Array<Filiere>;
formateurOrphans: Array<Formateur>;
constructor(private matiereService: MatiereHttpService){

}

listFormateurs(): Array<Formateur> {
  return this.formateurOrphans;
}

listFilieres(): Array<Filiere> {
  return this.filiereOrphans;
}
list(): Array<Matiere> {
  return this.matiereService.findAll();
}

add(): void {
  this.formMatiere = new Matiere();
}


edit(id: number): void {
  this.matiereService.findById(id).subscribe((response: Matiere) => {
    this.formMatiere = response;
})
}

save(): void {
  if(this.formMatiere.id) { // UPDATE
    this.matiereService.update(this.formMatiere);
  } else { // CREATE
    this.matiereService.create(this.formMatiere);
  }

  this.cancel();
}

remove(id: number): void {
  this.matiereService.remove(id);
}

cancel(): void {
  this.formMatiere = null;
}

}
