import { Component, OnInit } from '@angular/core';
import {  Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
//added [] in pageSizeOptions
export class PaginatorComponent  {
  @Input()
  pageSizeOptions: number[]=[] ;
  
  @Input()
  config: any;
  
  constructor(private  router:  Router) { }
  pageChange(newPage: number) {
    this.router.navigate(['/page/', newPage]);
  }
  changePageItemCount(selectedItem:any) {
    localStorage.setItem('pageSize', selectedItem.value);
    this.config.itemsPerPage = selectedItem.value;
  }
  
  ngOnInit(): void {
  }

}
