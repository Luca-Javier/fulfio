import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidenceTypeComponent } from 'src/components/incidence-type';
import Helpers from 'src/utils/helpers';
import { Incidence } from 'src/constants/models';
import { ButtonComponent } from 'src/components/button/button.component';
import { ChatMessageComponent } from './chat-message';

@Component({
  selector: 'incidence-chat',
  standalone: true,
  imports: [
    CommonModule,
    IncidenceTypeComponent,
    ButtonComponent,
    ChatMessageComponent,
  ],
  templateUrl: './incidence-chat.component.html',
  styleUrls: ['./incidence-chat.component.scss'],
})
export class IncidenceChatComponent implements OnChanges {
  // con media queries poner usar absolute y tapar lo demás
  getLastTime = Helpers.getLastTime;
  title: string = '';
  lastTime: string = '';
  opnenedIncidenceId: number | null = null;

  @Input() incidenceData!: Incidence;

  ngOnChanges(changes: SimpleChanges) {
    if (!('incidenceData' in changes)) return;

    this.title = 'title';
    this.lastTime = this.getLastTime(this.incidenceData.lastInteraction);
  }

  @Output() closeChatEvent = new EventEmitter();

  closeChat() {
    this.closeChatEvent.emit();
  }

  openChat() {}
}
