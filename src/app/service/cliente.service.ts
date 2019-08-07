import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { cliente } from '../models/cliente.model'

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
// configurar manipulação de dados recebidos do formilario
export class ClienteService {

  constructor(private http:HttpClient) { }

//crud
//inserir dados do cliente

  addCliente(cliente:cliente){
    return this.http.post(`${API_URL}/cliente`, cliente, httpOptions)
  }

  //pesquisar i cliente pelo email
  getCliente(email:string){
    return this.http.get<cliente>(`${API_URL}/cliente?emailCliente=${email}`, httpOptions)
  }


}
