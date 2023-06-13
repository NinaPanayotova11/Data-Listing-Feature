import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface IToast {
  text?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  // internal subject to control the state
  private toast: BehaviorSubject<IToast | null> =
    new BehaviorSubject<IToast | null>(null);
  toast$: Observable<IToast | null> = this.toast.asObservable();

  // show, updates the state to something
  Show(text: string) {
    this.toast.next({ text: text });
  }
  // hide, updates the state to null
  Hide() {
    this.toast.next(null);
  }
}
