import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {QrCodeProvider} from "../../providers/qr-code/qr-code";
import {SocialSharing} from "@ionic-native/social-sharing";
import QRCode from "qrcode";


@IonicPage()
@Component({
    selector: 'page-create-qr-code',
    templateUrl: 'create-qr-code.html',
})


export class CreateQrCodePage {
    public textToEncode: string = '';
    public createdCode: string = '';

    constructor(
        private qrCodeProvider: QrCodeProvider,
        private socialSharing: SocialSharing
    ) {
    }

    public async share(): Promise<void> {
        const url = await QRCode.toDataURL(this.createdCode, {errorCorrectionLevel: 'H'});
        this.socialSharing.share(this.createdCode, null, url);
    }

    public getText(): string {
        return this.textToEncode.trim();
    }

    public generate(): void {
        const text = this.getText();
        if (text.length) {
            this.qrCodeProvider.generate(text)
                .then(createdCode => this.createdCode = createdCode);
        }
    }
}
