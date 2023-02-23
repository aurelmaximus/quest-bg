import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Matiere } from '../model';

@Injectable({
  providedIn: 'root'
})
export class MatiereHttpService {

  matieres: Array<Matiere> = new Array<Matiere>();


  constructor(private http: HttpClient) { 
    this.load();
  }

  findAll(): Array<Matiere> {
    return this.matieres;
  }

  findById(id: number): Observable<Matiere> {
    return this.http.get<Matiere>("http://localhost:8888/matiere/" + id);
  }

  create(matiere: Matiere): void {
    this.http.post<Matiere>("http://localhost:8888/matiere", matiere).subscribe((resp: any) => {
      this.load();
    });
  }

  update(matiere: Matiere): void {
    this.http.put<Matiere>("http://localhost:8888/matiere/" + matiere.id, matiere).subscribe((resp: any) => {
      this.load();
    });
  }

  remove(id: number): void {
    this.http.delete<void>("http://localhost:8888/matiere/" + id).subscribe((resp: any) => {
      this.load();
    });
  }

  private load(): void {
    this.http.get<Array<Matiere>>("http://localhost:8888/matiere").subscribe((resp: any) => {
      this.matieres = resp;
    });
  }


  




}
