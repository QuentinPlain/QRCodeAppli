export class QrCode {
    
    constructor(
        private readonly text: string,
        private readonly date: Date = new Date()
    ) {
    }

    public static fromStorage(qrCodeStorage: object): QrCode {
        return new this(
            qrCodeStorage['text'],
            new Date(qrCodeStorage['date'])
        )
    }

    public getText(): string {
        return this.text;
    }

    public getDate(): Date {
        return this.date;
    }
}
