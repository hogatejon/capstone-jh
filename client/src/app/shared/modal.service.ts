import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private showModal: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  watch(): Observable<boolean> {
    return this.showModal.asObservable();
  }

  open() {
    this.showModal.next(true);
  }

  close() {
    this.showModal.next(false);
  }
}
