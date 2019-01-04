import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {QrCode} from "../../models/qr-code";

import {QrCodeProvider} from "../../providers/qr-code/qr-code";
import {QrCodeDisplayPage} from "../qr-code-display/qr-code-display";


@Component({
    selector: 'page-history',
    templateUrl: 'history.html'
})


export class HistoryPage {
    public items: Array<QrCode>;

    constructor(private navCtrl: NavController, private qrCodeProvider: QrCodeProvider) {
        this.qrCodeProvider.getQrCodeCollection()
            .then(qrCodeCollection => {
                this.items = qrCodeCollection.sort((qrCode1, qrCode2) => qrCode2.getDate().getTime() - qrCode1.getDate().getTime());
            });
    }

    public itemTapped(event, item) {
        this.navCtrl.push(QrCodeDisplayPage, {
            qrCode: item
        });
    }
}
