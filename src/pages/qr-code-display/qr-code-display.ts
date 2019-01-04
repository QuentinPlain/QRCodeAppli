import {Component} from '@angular/core';
import {IonicPage, NavParams} from 'ionic-angular';
import {QrCode} from "../../models/qr-code";


@IonicPage()
@Component({
    selector: 'page-qr-code-display',
    templateUrl: 'qr-code-display.html',
})


export class QrCodeDisplayPage {
    private qrCode: QrCode;

    constructor(private navParams: NavParams) {
        this.qrCode = this.navParams.get('qrCode') as QrCode;
    }
}
