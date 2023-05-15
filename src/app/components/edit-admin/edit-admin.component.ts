import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { IAdmin } from 'src/app/models/i-admin';
import { AdminApiService } from 'src/app/services/admin-api.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent {
  newAdmin: any = {} as IAdmin
  id = this.activatedRoute.snapshot.params['id']
  constructor(private adminApi:AdminApiService, private activatedRoute:ActivatedRoute, private router:Router){}

  ngOnInit():void{
    this.adminApi.getAdminById(this.id).subscribe((data: {}) => {
      this.newAdmin = data
    });
  }
  editAdmin(){
    this.adminApi.patchAdmins(this.id,this.newAdmin).subscribe({
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
