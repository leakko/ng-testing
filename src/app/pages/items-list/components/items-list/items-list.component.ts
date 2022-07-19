import { Component, OnInit } from '@angular/core';
import { item } from 'src/app/interfaces/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  items!: item[];
  mainItem!: item;

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService.getItems().subscribe(items => {
      this.items = items;
      this.mainItem = {...this.items[0]}
      console.log("Items =>", this.items);
    });
  }

  updateMainItem(item: item) {
    this.mainItem = item;
  }

}
