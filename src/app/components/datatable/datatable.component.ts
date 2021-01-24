import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnDestroy, OnInit{
  dtOptions: DataTables.Settings = {};
  res:any;

  title = 'test';
  dtTrigger=new Subject();
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 20
    };
    this.http.get('/data_melp.json')
    .subscribe(data=>{
      this.res=data;
      this.dtTrigger.next();
      console.log('prueba ', this.res);
    });
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
