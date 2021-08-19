import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }
  // ca sa afisez mesajul; 
  // este public ca sa putem lega de template-ul nostru

  ngOnInit(): void {
  }

}
