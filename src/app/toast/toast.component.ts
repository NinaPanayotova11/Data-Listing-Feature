import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent {
  constructor(public toastService: ToastService) {}
}
