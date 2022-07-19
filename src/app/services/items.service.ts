import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private httpClient: HttpClient) { }

  getItems() {
    return this.httpClient.get<item[]>("assets/items.json")
  }
}
