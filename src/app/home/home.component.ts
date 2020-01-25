import { Component, OnInit } from "@angular/core";
import { ChatService } from "../services/chat.service";
// import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public users: number = 0;
  public message: string = "";
  public messages: any[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.receiveChat().subscribe((message: string) => {
      this.messages.push({ message: message, align: true });
    });

    this.chatService.getUsers().subscribe((users: number) => {
      this.users = users;
    });
  }

  addChat() {
    this.messages.push({ message: this.message, align: false });
    this.chatService.sendChat(this.message);
    this.message = "";
    console.log("pressionou o enter");
  }
}
