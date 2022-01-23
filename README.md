# Modal Component Angular

> :warning: **global.scss**

```scss

//Atributos css da modal
ion-modal.lang-modal {
  --width: 250px;
  --height: 250px;
  --border-radius: 10px;
}
```

> **Ts File**

```Ts
  private lang?: Language;
  
  //Promise para abrir a modal
  async openModal(){

    //Criação da modal
    const modal = await this.modalController.create({
      component: ModalComponent, // Componente que sera utilizado pela modal
      cssClass: 'lang-modal',// classe para estilização da modal, ⚠️deve estar no global.scss⚠️
      //backdropDismiss: false // Disable Dismiss on Backdrop click
    });

    //Promise para o tratamento do dado retornado pela modal, quando ela eh fechada
    modal.onWillDismiss().then( (e) => {
      this.lang = e.data.lang
    }).catch(err => {
      console.log(err);
    });

    return await modal.present(); //Chama a modal criada
  }

```

> **HTML Modal Component File**

```HTML
<ion-list class="">
  
  <!-- Modal Header -->
  <ion-list-header class="header">
    <ion-label class="header-title">IDIOMAS</ion-label>
    <ion-button
      class="ion-justify-content-between close-button"
      (click)="dismissModal()"
    >
      <ion-icon slot="icon-only" name="close-circle-outline"></ion-icon>
    </ion-button>
  </ion-list-header>

  <!-- Modal Body -->
  <div class="lang-items">
    <ion-item button (click)="setLang(lang.id)" detail="false" *ngFor="let lang of langs">
      <span [class]="'icon fi fi-' + lang.icon"></span>
      <ion-label class="ion-margin-start">{{ lang.name }}</ion-label>
    </ion-item>
  </div>

  <!-- Modal Footer -->
  <ion-footer class="ion-align-self-end">
    <ion-item button detail="false" (click)="dismissModal()">
      <ion-label class="ion-text-center">Cancelar</ion-label>
    </ion-item>
  </ion-footer>

</ion-list>
```

> **Modal Component Ts File**

```Ts

//Modelo do objeto de Linguagem
export interface Language{
  id: number,
  locale:string,
  icon:string,
  name:string
}

/**
 * Classe para gerenciar a modal de escopha do idioma
 */
export class ModalComponent {
  public langs: Language[];
  public selectedLang?: Language;
  constructor(private modalController: ModalController) {  }

  //Atribui a linguagem escolhida e fecha a modal
  setLang(id: number){
    this.selectedLang = this.langs.find( obj => {
      return obj.id == id;
    });
    this.dismissModal()
  }

  //Fecha a modal, caso não tenha um idioma definido retorna `undefined`
  dismissModal(){
    this.modalController.dismiss({
      'dismissed': true,
      'lang': this.selectedLang
    })
  }

}

```
