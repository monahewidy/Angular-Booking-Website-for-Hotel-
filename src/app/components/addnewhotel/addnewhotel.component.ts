import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IHotel } from 'src/app/models/ihotel';
import { HotelapiService } from 'src/app/services/hotelapi.service';

@Component({
  selector: 'app-addnewhotel',
  templateUrl: './addnewhotel.component.html',
  styleUrls: ['./addnewhotel.component.css']
})
export class AddnewhotelComponent {
  newHotel: any = {} as IHotel;

  id = this.activatedRoute.snapshot.params['id']
  constructor(private hotelserv: HotelapiService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.hotelserv.getHotelById(this.id).subscribe((data: {}) => {
      this.newHotel = data
    });
  }
  editHotel() {
    this.hotelserv.patchHotelById(this.id, this.newHotel).subscribe({
      next: (newHotel) => {
        console.log(newHotel);
        this.router.navigate(['/tables-data']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  AddHotel() {

    this.hotelserv.postHotel(this.newHotel).subscribe(data => {
      this.newHotel = data

      this.router.navigate(['/tables-data'])

    });
  }


}


