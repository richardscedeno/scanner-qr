import { Component } from '@angular/core';

//Mis importaciones 
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  datosScaneados: {};

  constructor(private barcodeScanner: BarcodeScanner) {}

  scannerCode(){
    this.barcodeScanner.scan().then(respuesta=>{
      this.datosScaneados = respuesta;
    })
    .catch(err=>{
      console.log("Error", err);
    });
  }

}
