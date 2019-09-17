import { Injectable } from '@angular/core';
import { DreamInterface } from '../models/dreams';
import { Subject, Observable , BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DreamsService {
  dreamsList: DreamInterface[];
  public invokeEvent: Subject<any> = new BehaviorSubject([]);
  constructor() {
    this.invokeEvent.subscribe(res => this.dreamsList = res);
  }
  showAllDreams(): Observable<any> {
    return this.invokeEvent.asObservable();
  }
  addDream(dream: DreamInterface): void {
    if (dream !== undefined) {
      console.log('dream ', dream);
      this.dreamsList.push(dream);
      this.invokeEvent.next(this.dreamsList);
    }
  }
}
