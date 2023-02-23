import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stagiaire } from '../model';

@Injectable({
  providedIn: 'root'
})
export class StagiaireHttpService {

  stagiaires: Array<Stagiaire> = new Array<Stagiaire>();
  civilites: Map<string, string> = new Map<string,string>();

  constructor(private http: HttpClient) {
    this.load();
    this.loadCivilites();
  }

  findAllCivilite(): Map<string, string> {
    return this.civilites;
  }

  findAll(): Array<Stagiaire> {
    return this.stagiaires;
  }

  findById(id: number): Observable<Stagiaire> {
    return this.http.get<Stagiaire>("http://localhost:8888/stagiaire/" + id);
  }

  create(stagiaire: Stagiaire): void {
    this.http.post<Stagiaire>("http://localhost:8888/stagiaire", stagiaire).subscribe(resp => {
      this.load();
    });
  }

  update(stagiaire: Stagiaire): void {
    this.http.put<Stagiaire>("http://localhost:8888/stagiaire/" + stagiaire.id, stagiaire).subscribe(resp => {
      this.load();
    });
  }

  remove(id: number): void {
    this.http.delete<void>("http://localhost:8888/stagiaire/" + id).subscribe(resp => {
      this.load();
    });
  }

  private load(): void {
    this.http.get<Array<Stagiaire>>("http://localhost:8888/stagiaire").subscribe(resp => {
      this.stagiaires = resp;
    });
  }

  private loadCivilites(): void {
    this.http.get<Array<string>>("http://localhost:8888/civilites").subscribe(resp => {
      resp.forEach(civ => {
        this.civilites.set(civ, civ);
      });
    });
  }
}
