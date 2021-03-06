import { Injectable } from '@angular/core';
import { Participant } from '../../models/Participant';

@Injectable()
export class ParticipantService {
  participants: Participant[];

  constructor() { }

  getParticipants() {
    if (localStorage.getItem('participants') === null) {
      this.participants = [];
    } else {
      this.participants = JSON.parse(localStorage.getItem('participants'));
    }
    return this.participants;
  }

  addParticipant(participant: Participant) {
    this.participants.unshift(participant);
    localStorage.setItem('participants', JSON.stringify(this.participants));
  }

  removeParticipant(participant: Participant) {
    for (let i = 0; i < this.participants.length; i++) {
      if (participant == this.participants[i]) {
        this.participants.splice(i, 1);
      }
    }
    localStorage.setItem('participants', JSON.stringify(this.participants));
  }

  exportParticipants() {
    return JSON.stringify(this.participants);
  }

  //overwrite localstorage, and refresh local list of participants from there...
  importParticipants(jsonParticipants) {
    localStorage.setItem('participants', jsonParticipants);
    this.exportParticipants();
  }

  compare(a, b) {
    if (a.last_nom < b.last_nom)
      return -1;
    if (a.last_nom > b.last_nom)
      return 1;
    return 0;
  }

}
