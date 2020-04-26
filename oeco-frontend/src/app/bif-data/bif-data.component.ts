import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bif-data',
  templateUrl: './bif-data.component.html',
  styleUrls: ['./bif-data.component.css']
})
export class BifDataComponent implements OnInit {
  public links = [
    {
      url: 'http://opencasestudy.eu/v1/api/case-controller/search-case-all-data',
      name: 'Search Cases by Age and Conditions',
      returnType: 'json',
      method: 'POST',
      example: 'http://opencasestudy.eu/'
    },
    {
      url: 'http://opencasestudy.eu/v1/api/case-controller/search-case-all-data',
      name: 'Search Cases by Age',
      returnType: 'json',
      method: 'POST',
      example: 'http://opencasestudy.eu/'
    },
    {
      url: 'http://opencasestudy.eu/v1/api/case-controller/search-case-with-drugs',
      name: 'Search Cases by Drugs',
      returnType: 'json',
      method: 'POST',
      example: 'http://opencasestudy.eu/'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
