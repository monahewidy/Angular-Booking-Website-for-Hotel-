import { Component } from '@angular/core';
import { IUser } from 'src/app/models/IUser';
import { UserapiService } from 'src/app/services/userapi.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent  {

  user: IUser | undefined = undefined;
  userlist:any | undefined []=[];
usr:any ;
currentuserid:number =0;

  // currentprodid: number;
  constructor(private userapiService: UserapiService,
   
    ) {
        this.usr={
          id: this.currentuserid,
        userName: "",
      
        userPassword: "",
      
        userPhone: 0,
      
        userEmail: "",
      
        userAddress: ""
      
       
      }
      

   }

  ngOnInit(): void {
    //  this.userlist = this.userapiService.getAllUsers();
this.userapiService.getAllUsers().subscribe(data => {this.userlist=data})

    
  }
  update(newUsername: string, newpassword: any, newnumber: any , newmail:any,newaddress:string) {
    this.usr={
      id:this.currentuserid,
      userName:newUsername,
      userPassword:newpassword,
      // imgURL:newIMG,
      userPhone:parseInt(newnumber),
      userEmail:newmail,
      userAddress:newaddress

    }
  }

}
