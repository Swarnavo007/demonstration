import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private service:HomeService) { }

  public datas=[];

  ngOnInit(): void {

    this.service.getExternal().subscribe(
      data=>this.datas=data
    )
  }

}
