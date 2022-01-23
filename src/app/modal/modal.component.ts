import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';

export interface Language{
  id: number,
  locale:string,
  icon:string,
  name:string
}

@Component({
  selector: 'modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
/**
 * Classe para gerenciar a modal de escolha do idioma
 */
export class ModalComponent {
  public langs: Language[];
  public selectedLang?: Language;
  constructor(private modalController: ModalController) {

    this.langs = [
          {
            id: 1,
            locale: 'pt_BR',
            icon:"br",
            name: 'Português'
          },
          {
            id: 2,
            locale: 'en',
            icon:"us",
            name: 'Ingles'
          },
          {
            id: 3,
            locale: 'es',
            icon:"es",
            name: 'Espanhol'
          }
        ]
  }



  setLang(id: number){

    this.selectedLang = this.langs.find( obj => {
      return obj.id == id;
    });

    this.dismissModal()
  }

  dismissModal(){
    this.modalController.dismiss({
      'dismissed': true,
      'lang': this.selectedLang
    })
  }

}
