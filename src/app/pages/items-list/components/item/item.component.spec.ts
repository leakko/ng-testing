import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { item } from 'src/app/interfaces/item';

import { ItemComponent } from './item.component';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display item info', () => {
    //find item data
    let nameDe = fixture.debugElement.query(By.css('.name > span'));
    let nameEl: HTMLElement = nameDe.nativeElement;
    let valueDe = fixture.debugElement.query(By.css('.value > span'));
    let valueEl: HTMLElement = valueDe.nativeElement;

    //mock the item supplied by the parents
    let expectedItem: item = {name: "Banana", value: 1000000};

    //simulate the parent setting the input property
    component.itemInfo = expectedItem;

    //trigger data binding
    fixture.detectChanges();

    expect(nameEl.textContent)
    .withContext(': name')
    .toBe(expectedItem.name);

    expect(valueEl.textContent)
    .withContext(': value')
    .toBe(expectedItem.value.toString());
  });

});
