import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandleModalService } from 'src/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  modal$: Observable<boolean>;
  activeClass: string = '';

  constructor(private modalService: HandleModalService) {
    this.modal$ = this.modalService.getModalAsObservable();
  }

  ngOnInit(): void {
    this.modal$.subscribe((data) => {
      this.activeClass = data ? 'active' : '';
    });
  }

  close(e: Event) {
    e.stopPropagation();

    if (e.target !== e.currentTarget) return;
    this.modalService.close();
  }
}
