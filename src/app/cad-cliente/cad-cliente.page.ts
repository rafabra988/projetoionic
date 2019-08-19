import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController, ModalController } from '@ionic/angular';
import { cliente } from '../models/cliente.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from '../service/cliente.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cad-cliente',
  templateUrl: './cad-cliente.page.html',
  styleUrls: ['./cad-cliente.page.scss'],
})
export class CadClientePage implements OnInit {
  
  formCliente:FormGroup;

  private cliente:cliente[];
  
  constructor(public loadingController: LoadingController, public alertController: AlertController,
    private formbuilder:FormBuilder, //metodo de validacao
    private clienteservice:ClienteService, ////metodo criado pra manipular os dados da base (o service q vc criou [intermedio entre banco e app])
    private router:Router //rota pra outra pagina, para resposta do usuario
      ) {
        this.isToggled = false;
      }

      public isToggled: boolean;

      public notify() {
        if(this.isToggled){
          alert("deu ruim")
        }else{
          alert("fdhghj")
        }
      }

      ngOnInit(): void {

    //separar campos q foram agrupado no formgroup no html, para trata-los individualmente
    this.formCliente = this.formbuilder.group({

      nome:[
        //parametros resposaveis pela validacao do conteudo do campo
          '',[

            Validators.required,//campo obrigatorio
            Validators.min(2),//quantidade minima de caracteres
            Validators.max(100),//quantidade maxima de caracteres
            Validators.pattern(/^[a-zA-Z]+$/),//regex (caracteres disponiveis)
          ]
        ],
      senha:[
          '',[

            Validators.required,
            Validators.min(5),
            Validators.max(5)
          ]
        ]
      ,
      email:[ 
          '',[

            Validators.required,
            Validators.max(100),
            Validators.email
          ]
        ]
      ,
      endereco:[
          '',[

            Validators.required,
            Validators.max(100)
          ]
        ]
          
    })


    this.listaCliente()

  }

  test(){
    const novoCliente = this.formCliente.getRawValue() as cliente;
    
    console.log(novoCliente);
  }

  add(){
    //enviar para o servidor
    //resgatando os valores do campo e fazendo um cast(consersão) para o modelo(template) cliente
    const novoCliente = this.formCliente.getRawValue() as cliente;

    this.clienteservice.addCliente(novoCliente).subscribe(
      
      error =>{
        console.log(error)
        this.formCliente.reset();
      }
    )
  }


  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Enviando dados',
      duration: 3000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    
    window.location.reload();

    console.log('botão foi apertado!');
  }


  async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Cancelar',
        message: 'Você realmente deseja cancelar?',
        buttons: ['Sim', 'Não']
        ,
      });
  
      await alert.present();
    }
 
   listaCliente(){
     this.clienteservice.pesquisarCliente().subscribe(
       clienteDB => this.cliente = clienteDB,
       erroDB => console.log(erroDB)
     )
  }

}
