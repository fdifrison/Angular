import { Component } from '@angular/core';
import {MessageService} from "../message.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  imports: [
    NgIf,
    NgForOf
  ],
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {}

}
