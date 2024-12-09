import { Component } from '@angular/core';
import { Result } from '@zxing/library';

@Component({
  selector: 'app-qr-code-scanner',
  templateUrl: './qr-code-scanner.component.html',
  styleUrls: ['./qr-code-scanner.component.css']
})
export class QrCodeScannerComponent {
  scannedResult: string | null = null;

  handleQrCodeResult(result: any) {
    this.scannedResult = result.getText(); // Get the text from the scanned QR code
    console.log('Scanned QR code result:', this.scannedResult);
  }

}
