import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  qrcode_result: any;
  qrcode_format: any;
  readStatus = false;

  constructor(
    public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner
  ) {}
  onScan() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        this.qrcode_result = barcodeData.text;
        this.qrcode_format = barcodeData.format;
        alert("read successfully " + JSON.stringify(barcodeData));
      })
      .catch(err => {
        alert("read fail " + JSON.stringify(err));
      });
  }
}
