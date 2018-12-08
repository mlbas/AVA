import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Turma } from './turma.model';


@Injectable()
export class TurmaService {
private baseUrl = "http://localhost:3000";
  private options = {
    headers: new Headers({
      'Content-Type' : 'application/json',
    }),
  };

  constructor(private http: Http) {}

  public getTurma(id: String): Promise<Turma> {
    return this.http.get(this.baseUrl + '/turma/' + id)
      .toPromise()
      .then(
        value => value.json() 
      )
      .catch(
        reason => Promise.reject(reason)
      );
  }

  public addTurma(t:Turma): Promise<Boolean>{
    return this.http.post(this.baseUrl + '/turma', JSON.stringify(t), this.options)
      .toPromise()
      .then(value => value.json().success ? true : false)
      .catch(reason => Promise.reject(reason));
  }
}
