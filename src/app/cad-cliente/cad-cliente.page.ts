import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cad-cliente',
  templateUrl: './cad-cliente.page.html',
  styleUrls: ['./cad-cliente.page.scss'],
})
export class CadClientePage implements OnInit {

  ngOnInit() {
  }

  constructor(public loadingController: LoadingController, public alertController: AlertController) {}

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'carregando',
      duration: 8000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    

    console.log('Loading dismissed!');
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
}
