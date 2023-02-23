import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ordinateur } from '../model';

@Injectable({
  providedIn: 'root'
})
export class OrdinateurHttpService {

  ordinateurs: Array<Ordinateur> = new Array<Ordinateur>();

  constructor(private http: HttpClient) {
    this.load();
  }

  findAll(): Array<Ordinateur> {
    return this.ordinateurs;
  }

  findAllOrphans(id?: number): Observable<Array<Ordinateur>> {
    return this.http.get<Array<Ordinateur>>("http://localhost:8888/ordinateur/orphans/"+(id?id:""));
  }

  findById(id: number): Observable<Ordinateur> {
    return this.http.get<Ordinateur>("http://localhost:8888/ordinateur/" + id);
  }

  create(ordinateur: Ordinateur): void {
    this.http.post<Ordinateur>("http://localhost:8888/ordinateur", ordinateur).subscribe(resp => {
      this.load();
    });
  }

  update(ordinateur: Ordinateur): void {
    this.http.put<Ordinateur>("http://localhost:8888/ordinateur/" + ordinateur.id, ordinateur).subscribe(resp => {
      this.load();
    });
  }

  remove(id: number): void {
    this.http.delete<void>("http://localhost:8888/ordinateur/" + id).subscribe(resp => {
      this.load();
    });
  }

  private load(): void {
    this.http.get<Array<Ordinateur>>("http://localhost:8888/ordinateur").subscribe(resp => {
      this.ordinateurs = resp;
    });
  }
}
