import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { profissional } from '../models/profissional.model';


//realizar a conexao com o servidor carregando o driver do banco
const API_URL = 'http://localhost:3000';
const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type' : 'application/json; charset=utf-8'}
  )
};

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  constructor(private http:HttpClient) { }

  //crud
//inserir dados do cliente

Prof(prof:profissional){
  return this.http.post(`${API_URL}/profissional`, prof, httpOptions);
}

//pesquisar o cliente pelo email
getProf(email:string){
  return this.http.get<profissional>(`${API_URL}/profissional?emailProfissional=${email}`, httpOptions);
}

//pesquisar/listar todos os clientes
pesquisarProf(){
  return this.http.get<profissional[]>(`${API_URL}/profissional`, httpOptions);
}

//atualizar dados
updateProf(prof:profissional){
  return this.http.post(`${API_URL}/profissional`, prof, httpOptions);
}

//apagar registro
deleteProf(email:profissional){
  return this.http.delete(`${API_URL}/profissional/${email}`,  httpOptions);
}
}
