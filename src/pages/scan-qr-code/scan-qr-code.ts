import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {BarcodeScanner} from "@ionic-native/barcode-scanner";


@IonicPage()
@Component({
    selector: 'page-scan-qr-code',
    templateUrl: 'scan-qr-code.html',
})


export class ScanQrCodePage {
    private scannedCode: string;

    constructor(private barcodeScanner: BarcodeScanner) {
    }


    public scanCode() {
        this.barcodeScanner.scan()
            .then(barcodeData => {
                this.scannedCode = barcodeData.text;
            });
    }
}
