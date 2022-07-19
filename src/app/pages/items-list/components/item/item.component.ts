import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { item } from 'src/app/interfaces/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() itemInfo!: item;

  @Output() makeMain = new EventEmitter<item>();

  constructor() { }

  ngOnInit(): void {
  }

}
