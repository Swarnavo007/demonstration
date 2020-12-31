import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { SortPipe } from '../sort.pipe';


@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  constructor(private service:HomeService) { }

  public details=[];

  

  ngOnInit(): void {

    this.details=this.service.getDetails();
  }

}
