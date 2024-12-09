import { Component, OnInit } from '@angular/core';
import { QrService } from 'src/app/services/qr.service';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent implements OnInit {
  qrData: string = '';
  qrCodes: any[] = [];
  scannedData: string = '';
  validationMessage: string = '';

  constructor(private qrService: QrService) { }

  ngOnInit(): void {
    this.getAllQRCodes();
  }

  generateQRCode(): void {
    this.qrService.generateQRCode(this.qrData).subscribe(
      (response) => {
        console.log("res------------------1",response);
        this.qrCodes.push(response);
        this.qrData = ''; // Reset input after generation
      },
      (error) => {
        console.error('Error generating QR code', error);
      }
    );
  }

  getAllQRCodes(): void {
    this.qrService.getAllQRCodes().subscribe(
      (codes) => {
        this.qrCodes = codes;
      },
      (error) => {
        console.error('Error fetching QR codes', error);
      }
    );
  }

  validateQRCode(): void {
    this.qrService.validateQRCode(this.scannedData).subscribe(
      (response) => {
        this.validationMessage = response.success
          ? 'QR Code is valid'
          : 'QR Code not found';
      },
      (error) => {
        console.error('Error validating QR code', error);
      }
    );
  }

}
