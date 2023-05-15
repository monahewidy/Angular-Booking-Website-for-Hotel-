import { Injectable } from '@angular/core';
import { IHotel } from '../models/ihotel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class HotelapiService {
  private httpOptionsHeders = {};
  constructor(private httpClient: HttpClient) {
    this.httpOptionsHeders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  getAllHotels(): Observable<IHotel[]> {
    return this.httpClient.get<IHotel[]>(`${environment.APIBaseURL}/hotels`);
  }

  getHotelById(id: string | null): Observable<IHotel> {
    return this.httpClient.get<IHotel>(
      `${environment.APIBaseURL}/hotels/${id}`
    );
  }
  patchHotelById(id: string | null, hotels: IHotel): Observable<IHotel> {
    return this.httpClient.patch<IHotel>(
      `${environment.APIBaseURL}/hotels/${id}`,
      JSON.stringify(hotels),
      this.httpOptionsHeders
    );
  }
  deleteHotelById(id: string | null): Observable<IHotel> {
    return this.httpClient.delete<IHotel>(
      `${environment.APIBaseURL}/hotels/${id}`
    );
  }
  postHotel(hotels: IHotel): Observable<IHotel> {
    return this.httpClient.post<IHotel>(
      `${environment.APIBaseURL}/hotels`,
      JSON.stringify(hotels), this.httpOptionsHeders
    );
  }
}
