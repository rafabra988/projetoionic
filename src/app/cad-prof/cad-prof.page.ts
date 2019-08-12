import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { profissional } from '../models/profissional.model';
import { ProfissionalService } from '../service/profissional.service';

@Component({
  selector: 'app-cad-prof',
  templateUrl: './cad-prof.page.html',
  styleUrls: ['./cad-prof.page.scss'],
})
export class CadProfPage {

    formProf:FormGroup;

  constructor(public loadingController: LoadingController, public alertController: AlertController,
    private formbuilder:FormBuilder, //metodo de validacao
    private profservice:ProfissionalService, ////metodo criado pra manipular os dados da base (o service q vc criou [intermedio entre banco e app])
    private router:Router ) {}

  ngOnInit(): void {
    //separar campos q foram agrupado no formgroup no html, para trata-los individualmente
    this.formProf = this.formbuilder.group({

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
        ],
      data:['', Validators.required],

      servico:['', Validators.required]
          
    })

  }

  test(){
    const novoProf = this.formProf.getRawValue() as profissional;

    console.log(novoProf);
  }

  addProf(){
    //enviar para o servidor
    //resgatando os valores do campo e fazendo um cast(consersão) para o modelo(template) cliente
    const novoProf = this.formProf.getRawValue() as profissional;

    this.profservice.Prof(novoProf).subscribe(
      () => this.router.navigateByUrl(''),//faz um direcionamento
      
      error =>{ 
        console.log(error)
        this.formProf.reset();
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
    

    console.log('botão foi apertado!');
  }


}
