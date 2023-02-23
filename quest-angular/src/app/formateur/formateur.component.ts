import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formateur } from '../model';
import { FormateurHttpService } from './formateur-http.service';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.scss']
})
export class FormateurComponent {

  formFormateur: Formateur = null;
  id:number;



  constructor(private formateurService: FormateurHttpService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.id=params["id"];
      });
  }

  list(): Array<Formateur> {
    return this.formateurService.findAll();
  }


  add(): void {
    this.formFormateur = new Formateur();
  }

  edit(id: number): void {
    this.formateurService.findById(id).subscribe(response => {
      this.formFormateur = response;
    });
  }

  save(): void {
    if(this.formFormateur.id) { // UPDATE
      this.formateurService.update(this.formFormateur);
    } else { // CREATE
      this.formateurService.create(this.formFormateur);
    }

    this.cancel();
  }

  remove(id: number): void {
    this.formateurService.remove(id);
  }

  cancel(): void {
    this.formFormateur = null;
  }
}



