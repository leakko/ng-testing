import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/interfaces/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() itemInfo!: Item;

  @Output() makeMain = new EventEmitter<Item>();

  constructor() { }

  ngOnInit(): void {
  }

}
