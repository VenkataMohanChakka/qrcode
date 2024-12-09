import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http'; 
import { ZXingScannerModule } from '@zxing/ngx-scanner';
// in AppModule
// import { BuilderModule } from '@builder.io/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QrCodeComponent } from './componets/qr-code/qr-code.component';
import { QrService } from './services/qr.service';
import { QrCodeScannerComponent } from './qr-code-scanner/qr-code-scanner.component';


@NgModule({
  declarations: [
    AppComponent,
    QrCodeComponent,
    QrCodeScannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ZXingScannerModule,
    // BuilderModule
  ],
  providers: [QrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
