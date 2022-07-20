import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private httpClient: HttpClient) { }

  getItems() {
    return this.httpClient.get<Item[]>("assets/items.json")
  }
}
