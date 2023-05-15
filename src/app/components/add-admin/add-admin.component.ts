import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAdmin } from 'src/app/models/i-admin';
import { AdminApiService } from 'src/app/services/admin-api.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent {
  newAdmin: any = {} as IAdmin
  id = this.activatedRoute.snapshot.params['id']
  constructor(private adminApi:AdminApiService, private activatedRoute:ActivatedRoute, private router:Router){}

  ngOnInit():void{
    this.adminApi.getAdminById(this.id).subscribe((data: {}) => {
      this.newAdmin = data
    });
  }
  addAdmin(){
    this.adminApi.addAdmin(this.newAdmin).subscribe({
      next: (newAdmin) => {
        console.log(newAdmin);
        this.router.navigate(['/admins']);
      },
      error: (err) => {
        console.log(err);
      },
    })
  }
}
