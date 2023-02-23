import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formateur } from '../model';

@Injectable({
  providedIn: 'root'
})
export class FormateurHttpService {

  formateurs: Array<Formateur> = new Array<Formateur>();

  constructor(private http: HttpClient) {
    this.load();
  }


  findAll(): Array<Formateur> {
    return this.formateurs;
  }

  findById(id: number): Observable<Formateur> {
    return this.http.get<Formateur>("http://localhost:8888/formateur/" + id);
  }

  create(formateur: Formateur): void {
    this.http.post<Formateur>("http://localhost:8888/formateur", formateur).subscribe(resp => {
      this.load();
    });
  }

  update(formateur: Formateur): void {
    this.http.put<Formateur>("http://localhost:8888/formateur/" + formateur.id, formateur).subscribe(resp => {
      this.load();
    });
  }

  remove(id: number): void {
    this.http.delete<void>("http://localhost:8888/formateur/" + id).subscribe(resp => {
      this.load();
    });
  }

  private load(): void {
    this.http.get<Array<Formateur>>("http://localhost:8888/formateur").subscribe(resp => {
      this.formateurs = resp;
    });
  }

}
