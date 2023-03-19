import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchQuery!: any;
  searchResult!: any[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  search() {
    this.apiService.search(this.searchQuery).subscribe((result: any[]) => {
      console.log(result);
      this.searchResult = result;
    });
  }

}
