import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:any;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUserdata();
  }

  getUserdata()
  {
    this.userService.getData().subscribe(res => {
      this.users = res;
    });
  }

}
