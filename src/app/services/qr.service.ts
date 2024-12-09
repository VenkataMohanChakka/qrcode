import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrService {

  private apiUrl = 'http://localhost:5000/api/qrcodes'; // Change this to your backend URL

  constructor(private http: HttpClient) { }

  generateQRCode(qrData: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/generate`, { qrData });
  }

  getAllQRCodes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  validateQRCode(qrData: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/validate`, { qrData });
  }
}
