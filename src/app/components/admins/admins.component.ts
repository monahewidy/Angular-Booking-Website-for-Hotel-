import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminApiService } from 'src/app/services/admin-api.service';
import { IAdmin } from './../../models/i-admin';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent {

  Admins: IAdmin[] = [];

  constructor(private adminApi: AdminApiService, private router: Router) { }

  ngOnInit(): void {
    this.adminApi.getAllAdmins().subscribe((data) => {
      this.Admins = data;
      console.log(this.Admins);
    });
  }

}
