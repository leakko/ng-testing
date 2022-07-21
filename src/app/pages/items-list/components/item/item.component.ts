import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/interfaces/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() itemInfo!: Item;

  @Output() makeMain = new EventEmitter<Item>();

  constructor(private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToDetails() {
    this.router.navigate(['.//', this.itemInfo.name.toLowerCase()], {relativeTo: this.actRoute});
  }

}
