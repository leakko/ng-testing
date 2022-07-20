import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { item } from '../interfaces/item';
import { asyncData } from '../testing/async-observable-helpers';

import { ItemsService } from './items.service';

describe('ItemsService', () => {
  let itemsService: ItemsService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    itemsService = new ItemsService(httpClientSpy);
  });

  it('should return the expected items', (done: DoneFn) => {
    const expectedItems: item[] = [{ name: 'One', value: 1 }, { name: 'Two', value: 2 }];
    httpClientSpy.get.and.returnValue(asyncData(expectedItems));

    itemsService.getItems().subscribe(
      {
        next: items => {
          expect(items)
          .withContext('expected items')
          .toEqual(expectedItems)

          done();
        },
        error: done.fail
      }
    )
  });
});
