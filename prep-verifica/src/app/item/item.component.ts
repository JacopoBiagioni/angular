import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  id!: any;
  item: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.apiService.getItem(this.id).subscribe((result: { product: any; }) => {
      console.log(result);
      this.item = result.product;
    });
  }

  goBack() {
    window.history.back();
  }

}

