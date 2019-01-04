import {Injectable} from '@angular/core';
import {Storage} from "@ionic/storage";
import {QrCode} from "../../models/qr-code";

@Injectable()
export class QrCodeProvider {
    
    private readonly storageKey: string = 'qrCodeCollection';

    constructor(private storage: Storage) {
    }

    public async getQrCodeCollection(): Promise<Array<QrCode>> {
        const qrCodeCollection = await this.storage.get(this.storageKey) || [];
        return qrCodeCollection.map(qrCode => QrCode.fromStorage(qrCode));
    }

    public setQrCodeCollection(qrCodeCollection: Array<QrCode>): Promise<Array<QrCode>> {
        return this.storage.set(this.storageKey, qrCodeCollection);
    }

    

    public async generate(text: string): Promise<string> {
        await this.addQrCode(new QrCode(text));
        return text;
    }

    public async addQrCode(qrCode: QrCode): Promise<Array<QrCode>> {
        const qrCodeCollection = await this.getQrCodeCollection();
        qrCodeCollection.push(qrCode);
        return this.setQrCodeCollection(qrCodeCollection);
    }
}
