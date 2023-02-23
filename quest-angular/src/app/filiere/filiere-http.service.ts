import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filiere } from '../model';

@Injectable({
  providedIn: 'root'
})
export class FiliereHttpService {

  filieres: Array<Filiere> = new Array<Filiere>();

  constructor(private http: HttpClient) {
    this.load();
  }

  findAllOrphans(id?: number): Observable<Array<Filiere>> {
    return this.http.get<Array<Filiere>>("http://localhost:8888/filiere/orphans/"+(id?id:""));
  }

  findAll(): Array<Filiere> {
    return this.filieres;
  }

  findById(id: number): Observable<Filiere> {
    return this.http.get<Filiere>("http://localhost:8888/filiere/" + id);
  }

  create(filiere: Filiere): void {
    this.http.post<Filiere>("http://localhost:8888/filiere", filiere).subscribe(resp => {
      this.load();
    });
  }

  update(filiere: Filiere): void {
    this.http.put<Filiere>("http://localhost:8888/filiere/" + filiere.id, filiere).subscribe(resp => {
      this.load();
    });
  }

  remove(id: number): void {
    this.http.delete<void>("http://localhost:8888/filiere/" + id).subscribe(resp => {
      this.load();
    });
  }

  private load(): void {
    this.http.get<Array<Filiere>>("http://localhost:8888/filiere").subscribe(resp => {
      this.filieres = resp;
    });
  }
}
