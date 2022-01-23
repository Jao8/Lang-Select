# Modal Component Angular

> **global.scss**

```scss
  --width: 60%;
  --height: 50%;
  --border-radius: 10px;
```

> **Ts File**

```Js
  async openModal(){
    const modal = await this.modalController.create({
      component: ModalComponent,
      cssClass: 'lang-modal'
    });

    return await modal.present();
  }

```

