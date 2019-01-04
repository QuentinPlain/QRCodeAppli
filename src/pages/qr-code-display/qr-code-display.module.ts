import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {QrCodeDisplayPage} from './qr-code-display';


@NgModule({
    declarations: [
        QrCodeDisplayPage,
    ],
    imports: [
        IonicPageModule.forChild(QrCodeDisplayPage),
    ],
})


export class QrCodeDisplayPageModule {
}
