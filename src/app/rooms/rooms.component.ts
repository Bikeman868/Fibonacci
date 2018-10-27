import { Component, OnInit } from '@angular/core';
import { Room } from '../room/room-component';
import { ROOMS } from '../mock-rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: Room[];
  selectedRoom: Room;

  constructor() { }

  ngOnInit() {
    this.rooms = ROOMS;
  }

  onSelectRoom(room): void {
    this.selectedRoom = room;
  }

}
