import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weight: number;
  height: number;

  constructor(private toastController: ToastController) {}

  isFormValid() {
    return (this.height && this.weight && this.height > 0 && this.weight > 0);
  }

  onCalculate() {
    const imc = this.weight / (this.height * this.height);
    var imcClassification = "";

    if ( imc < 18.5 )
      imcClassification = "Magreza";
    else if ( imc <= 24.9 )
      imcClassification = "Normal";
    else if ( imc <= 29.9)
      imcClassification = "Sobrepeso, obesidade grau I";
    else if ( imc <= 39.9)
      imcClassification = "Obesidade grau II";
    else
      imcClassification = "Obesidade grau III"

    this.showMessage(`Seu IMC é de ${imc.toFixed(2)} classificado como: ${imcClassification}`);
  }

  async showMessage(msg: string) {
    const previousToast = await this.toastController.getTop();
    if (previousToast) {
      await this.toastController.dismiss();
    }

    const toast = await this.toastController.create(
      {
        message: msg,
        color: 'tertiary',
        buttons: [
          {
            icon: 'close'
          }
        ]
      }
    );
    toast.present();
  }
}
