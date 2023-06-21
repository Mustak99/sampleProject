import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private list: string[] = ['Item 1', 'Item 2', 'Item 3'];

  getList(): string[] {
    return this.list;
  }

  addItem(item: string): void {
    this.list.push(item);
  }
}
