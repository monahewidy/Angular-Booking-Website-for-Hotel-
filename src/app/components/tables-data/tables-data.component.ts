import { IHotel } from 'src/app/models/ihotel';
import { HotelapiService } from './../../services/hotelapi.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
@Component({
  selector: 'app-tables-data',
  templateUrl: './tables-data.component.html',
  styleUrls: ['./tables-data.component.css'],
})
export class TablesDataComponent {
  Hotels: IHotel[] = [];
  newHotel: IHotel = {} as IHotel;
  

  constructor(private hotelserv: HotelapiService, private router: Router) {}

  ngOnInit(): void {
    this.hotelserv.getAllHotels().subscribe((data) => {
      this.Hotels = data;
    });
    console.log(this.Hotels);
  }

  deleteHotel(id: string) {
    this.hotelserv.deleteHotelById(id).subscribe((data: any) => {
    this.ngOnInit();
    });
  }
}
