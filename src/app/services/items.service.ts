import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Item } from '../interfaces/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private httpClient: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>("assets/items.json")
  }
}
