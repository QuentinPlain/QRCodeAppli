import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HistoryPage} from '../pages/history/history';
import {CreateQrCodePage} from "../pages/create-qr-code/create-qr-code";
import {ScanQrCodePage} from "../pages/scan-qr-code/scan-qr-code";


@Component({
    templateUrl: 'app.html'
})


export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = CreateQrCodePage;

    pages: Array<{ title: string, component: any }>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp();
        this.pages = [
            {title: 'Génération de QRCode', component: CreateQrCodePage},
            {title: 'Historique', component: HistoryPage},
            {title: 'Lecture de QRCode', component: ScanQrCodePage}
        ];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        this.nav.setRoot(page.component);
    }
}
