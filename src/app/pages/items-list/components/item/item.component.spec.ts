import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { first } from 'rxjs';
import { Item } from 'src/app/interfaces/item';
import { click } from 'src/app/testing';

import { ItemComponent } from './item.component';

describe('ItemComponent (stand-alone)', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  let nameDe: DebugElement;
  let nameEl: HTMLElement;
  let valueDe: DebugElement;
  let valueEl: HTMLElement;
  let buttonDe: DebugElement;
  let buttonEl: HTMLButtonElement;
  let expectedItem: Item;


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

    //mock the item supplied by the parent
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
    let selectedItem: Item | undefined;
    component.makeMain.pipe(first()).subscribe((item: Item) => selectedItem = item);
  
    click(buttonDe);

    expect(selectedItem).toBe(expectedItem);
  });

});

//Test item-list component to test integration

@Component({
  template: `
    <app-item
      [itemInfo]="item" (makeMain)="updateMainItem($event)">
    </app-item>`
})
class TestHostComponent {
  item: Item = {name: 'Mango', value: 88};
  selecteditem: Item | undefined;
  updateMainItem(item: Item) {
    this.selecteditem = item;
  }
}

describe('ItemComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let testHost: TestHostComponent;
  let nameDe: DebugElement;
  let nameEl: HTMLElement;
  let valueDe: DebugElement;
  let valueEl: HTMLElement;
  let buttonDe: DebugElement;
  let buttonEl: HTMLButtonElement;
  let expectedItem: Item;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemComponent, TestHostComponent ]
    });

    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;

    //find item data
    nameDe = fixture.debugElement.query(By.css('.name > span'));
    nameEl = nameDe.nativeElement;
    valueDe = fixture.debugElement.query(By.css('.value > span'));
    valueEl = valueDe.nativeElement;
    buttonDe = fixture.debugElement.query(By.css('.button'));
    buttonEl = buttonDe.nativeElement;

    //mock the item supplied by the parents
    expectedItem = {name: "Banana", value: 1000000};

    //trigger data binding
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(testHost).toBeTruthy();
  });

  it('should display item info', () => {
    expect(nameEl.textContent)
    .withContext(': name')
    .toBe(testHost.item.name);

    expect(valueEl.textContent)
    .withContext(': value')
    .toBe(testHost.item.value.toString());
  });

  it('should raise makeMain event when clicked (triggerEventHandler)', () => {
    click(buttonDe);

    expect(testHost.selecteditem).toBe(testHost.item);
  });

});
