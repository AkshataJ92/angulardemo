import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from './usertable';
import { UsertableService } from './usertable.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-usertabledisplay',
  templateUrl: './usertabledisplay.component.html',
  styleUrls: ['./usertabledisplay.component.css']
})
export class UsertabledisplayComponent implements OnInit {
 // dataSource:User[];
  dataSource = new MatTableDataSource(User[]);
  //arr:User[]=[];
  //dataSource = new MatTableDataSource;

  //dataSource = new MatTableDataSource<User>(this.dataSource);

  displayedColumns: string[] = ['user_email', 'user_name', 'user_password', 'user_mobile_no'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private _data:UsertableService) { }

  ngOnInit() {
    this._data.getAllUsers().subscribe(
      (data:User[])=>{
        this.dataSource=data;

        //this.dataSource.paginator = this.paginator;
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
