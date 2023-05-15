import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdmin } from '../models/i-admin';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  private httpOptionHeaders = {};

  constructor(private httpClient: HttpClient) {

    this.httpOptionHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  getAllAdmins(): Observable<IAdmin[]> {
    return this.httpClient.get<IAdmin[]>(`${environment.APIBaseURL}/Admins`);
  }

  getAdminById(id: string): Observable<IAdmin> {
    return this.httpClient.get<IAdmin>(`${environment.APIBaseURL}/Admins/${id}`);
  }

  addAdmin(admin:IAdmin):Observable<IAdmin>{
    return this.httpClient.post<IAdmin>(`${environment.APIBaseURL}/Admins`,JSON.stringify(admin),this.httpOptionHeaders)
  }

  patchAdmins(id: string | null, admin: IAdmin): Observable<IAdmin> {
    return this.httpClient.patch<IAdmin>(
      `${environment.APIBaseURL}/Admins/${id}`,
      JSON.stringify(admin),
      this.httpOptionHeaders
    );
  }


}
