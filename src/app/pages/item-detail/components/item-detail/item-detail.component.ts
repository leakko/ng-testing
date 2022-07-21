import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/interfaces/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  item!: Item | undefined;

  constructor(private actRoute: ActivatedRoute, private itemsService: ItemsService, private router: Router) { }

  ngOnInit(): void {
    let setItem = ((item: Item) => {
      this.item = item;
    }).bind(this);
    this.actRoute.paramMap.subscribe(params => {
      this.itemsService.getItems().subscribe(items => {
        let item = items.find(item => item.name.toLowerCase() === params.get('name'));
        if(item) {
          setItem(item);
        }
      })
    });
  }

  goToList() {
    this.router.navigateByUrl('/items-list');
  }

}
