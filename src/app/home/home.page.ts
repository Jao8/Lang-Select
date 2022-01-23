import { ModalComponent } from './../modal/modal.component';
import { Component } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public langs: object[];

  constructor(
    public routerOutlet: IonRouterOutlet,
    public modalController: ModalController,
  ) {
    this.langs = [
      {
        id: 1,
        locale: 'pt_BR',
        name: 'Portugues'
      },
      {
        id: 2,
        locale: 'en',
        name: 'Ingles'
      },
      {
        id: 3,
        locale: 'es',
        name: 'Espanhol'
      }
    ]
  }

  async openModal(){
    const modal = await this.modalController.create({
      component: ModalComponent,
      cssClass: 'lang-modal'
    });

    return await modal.present();
  }

}
