import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message, Session } from 'src/constants/models';
import { messages } from 'mocks/messages';
import { Observable } from 'rxjs';
import { SessionService } from 'src/services';
import { ChatService } from 'src/services/chat/chat.service';

@Component({
  selector: 'chat-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss'],
})
export class ChatMessageComponent implements OnInit {
  messages: Message[] = [];
  messages$!: Observable<Message[]>;
  userId!: number;
  @Input() incidenceId!: number;

  constructor(
    private sessionService: SessionService,
    private chatService: ChatService
  ) {
    this.sessionService.getSessionObservable().subscribe((value) => {
      this.userId = value.id;
    });
  }

  //sessionObservable: Observable<Session>;

  ngOnInit(): void {
    this.messages$ = this.chatService.getMessages(this.incidenceId);

    this.messages$.subscribe((messages) => {
      this.messages = messages;
    });
  }

  getSideClass(messageUserId: number) {
    return this.userId === messageUserId ? 'right-side' : '';
  }
}
