import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface IToast {
  text?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toast: BehaviorSubject<IToast | null> =
    new BehaviorSubject<IToast | null>(null);
  toast$: Observable<IToast | null> = this.toast.asObservable();

  // updates the state to something
  show(text: string) {
    this.toast.next({ text: text });
  }
  // updates the state to null
  hide() {
    this.toast.next(null);
  }
}
