import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { first } from 'rxjs';
import { item } from 'src/app/interfaces/item';
import { click } from 'src/app/testing';

import { ItemComponent } from './item.component';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  let nameDe: DebugElement;
  let nameEl: HTMLElement;
  let valueDe: DebugElement;
  let valueEl: HTMLElement;
  let buttonDe: DebugElement;
  let buttonEl: HTMLButtonElement;
  let expectedItem: item;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;

    //find item data
    nameDe = fixture.debugElement.query(By.css('.name > span'));
    nameEl = nameDe.nativeElement;
    valueDe = fixture.debugElement.query(By.css('.value > span'));
    valueEl = valueDe.nativeElement;
    buttonDe = fixture.debugElement.query(By.css('.button'));
    buttonEl = buttonDe.nativeElement;

    //mock the item supplied by the parents
    expectedItem = {name: "Banana", value: 1000000};

    //simulate the parent setting the input property
    component.itemInfo = expectedItem;

    //trigger data binding
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display item info', () => {
    expect(nameEl.textContent)
    .withContext(': name')
    .toBe(expectedItem.name);

    expect(valueEl.textContent)
    .withContext(': value')
    .toBe(expectedItem.value.toString());
  });

  it('should raise makeMain event when clicked (triggerEventHandler)', () => {
    let selectedItem: item | undefined;
    component.makeMain.pipe(first()).subscribe((item: item) => selectedItem = item);
  
    click(buttonDe);

    expect(selectedItem).toBe(expectedItem);
  });

});
