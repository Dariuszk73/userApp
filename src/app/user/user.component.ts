import { Component, OnInit } from '@angular/core';
import {User} from '../model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users: User[] = [];

  constructor() { }

  ngOnInit(): void {
    const user: User = {
      firstName: 'Jack',
      lastName: 'Sparrow'
    };
    const user2: User = {
      firstName: 'Brigitte',
      lastName: 'Jones'
    };
    this.users.push(user);
    this.users.push(user2);
  }

}
