import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {HistoryPage} from '../pages/history/history';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {QrCodeProvider} from '../providers/qr-code/qr-code';
import {HttpClientModule} from '@angular/common/http';
import {CreateQrCodePage} from "../pages/create-qr-code/create-qr-code";
import {NgxQRCodeModule} from "ngx-qrcode2";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import {IonicStorageModule} from "@ionic/storage";
import {QrCodeDisplayPage} from "../pages/qr-code-display/qr-code-display";
import {SocialSharing} from "@ionic-native/social-sharing";
import {ScanQrCodePage} from "../pages/scan-qr-code/scan-qr-code";

@NgModule({
    declarations: [
        MyApp,
        CreateQrCodePage,
        HistoryPage,
        QrCodeDisplayPage,
        ScanQrCodePage,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgxQRCodeModule,
        IonicStorageModule.forRoot(),
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        CreateQrCodePage,
        HistoryPage,
        QrCodeDisplayPage,
        ScanQrCodePage,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        BarcodeScanner,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        QrCodeProvider,
        SocialSharing,
    ]
})
export class AppModule {
}
