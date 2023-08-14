import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { incidences } from 'mocks/incidences';
import { IncidenceStateComponent } from 'src/components/incidence-state';
import { IncidenceTypeComponent } from 'src/components/incidence-type';
import { Incidence } from 'src/constants/models';
import Helpers from 'src/utils/helpers';
import { IncidenceChatComponent } from '../incidence-chat';
import { IncidencesService } from 'src/services/incidences';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-incidence-list',
  templateUrl: './incidence-list.component.html',
  styleUrls: [
    './incidence-list.component.scss',
    './incidence-list.component.mobile.scss',
  ],
  standalone: true,
  imports: [
    CommonModule,
    IncidenceTypeComponent,
    IncidenceStateComponent,
    IncidenceChatComponent,
  ],

})
export class IncidenceListComponent
  implements AfterViewInit, OnDestroy, OnInit
{
  incidences$: Observable<Incidence[]>;
  incidences!: Incidence[];
  isMobileWidth: '' | 'mobile' = '';
  chatData: Incidence | null = null;
  resizeObserver!: ResizeObserver;

  @ViewChild('incidencesContainer')
  incidencesContainer!: ElementRef<HTMLDivElement>;

  constructor(
    private cdr: ChangeDetectorRef,
    incidencesService: IncidencesService
  ) {
    this.incidences$ = incidencesService.getIncidences();
  }

  ngAfterViewInit() {
    const $div = this.incidencesContainer.nativeElement;

    const resizeObserver = new ResizeObserver((entries) => {
      const { target } = entries[0];

      if (target !== $div) return;

      $div.offsetWidth > 768
        ? (this.isMobileWidth = '')
        : (this.isMobileWidth = 'mobile');

      this.cdr.detectChanges();
    });

    resizeObserver.observe($div);
    this.resizeObserver = resizeObserver;
  }

  openChat(incidence: Incidence) {
    this.chatData = incidence;
  }

  closeChat(): void {
    this.chatData = null;
  }

  getLastTime = Helpers.getLastTime;

  ngOnInit(): void {
    this.incidences$.subscribe((incidences) => {
      this.incidences = incidences;
    });
  }

  ngOnDestroy(): void {
    this.resizeObserver.disconnect();
  }
}
