import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { IHotel } from 'src/app/models/ihotel';
import { HotelapiService } from 'src/app/services/hotelapi.service';


@Component({
  selector: 'app-new-hotel',
  templateUrl: './new-hotel.component.html',
  styleUrls: ['./new-hotel.component.css']
})
export class NewHotelComponent {
  newHotel: IHotel = {} as IHotel;
  images: any;
  multipleImages = [];
  constructor(private hotelserv: HotelapiService, private activatedRoute: ActivatedRoute, private router: Router, private http: HttpClient) { }

  // selectImage(event:any){
  //   if (event.target.files.length > 0){
  //     const file = event.target.files[0]
  //     console.log(file)
  //     this.images=file
  //   }
  // }

  AddHotel(form: NgForm) {
    console.log(form.value)
    this.hotelserv.postHotel(form.value).subscribe(data => {
      this.newHotel = data

      this.router.navigate(['/tables-data'])

    });

    // const formData = new FormData();
    // formData.append('file',this.images);

    // this.http.post<any>('http://localhost:1724/hotels', formData).subscribe(
    //   (res)=>console.log(res),
    //   (err)=>console.log(err)
    // )
  }

}
