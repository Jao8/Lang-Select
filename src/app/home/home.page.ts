import { Language, ModalComponent } from './../modal/modal.component';
import { Component } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private lang?: Language;

  constructor(
    public routerOutlet: IonRouterOutlet,
    public modalController: ModalController,
  ) {  }

test(){
  console.log(this.lang);

}

  async openModal(){
    const modal = await this.modalController.create({
      component: ModalComponent,
      cssClass: 'lang-modal',
      backdropDismiss: false
    });

    modal.onWillDismiss().then( (e) => {
      this.lang = e.data.lang;
      this.test();
    }).catch(err => {
      console.log(err);
    });

    return await modal.present();
  }

}
