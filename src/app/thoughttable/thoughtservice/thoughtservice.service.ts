import { Injectable } from '@angular/core';
import { Thought } from './../thoughtclass/thought';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  constructor() { }


  getThoughts(): Thought[] {
    return this.getThoughtsFromStorage() || [];
  }

  addThought(thought: Thought) {
    let thoughts: Thought[];
    thoughts = this.getThoughts();
    thoughts.push(thought);
    this.setThoughtsToStorage(thoughts);
    return this.getThoughts();
  }

  deleteThought(index) {
    let thoughts: Thought[];
    thoughts = this.getThoughtsFromStorage();
    thoughts.splice(index, 1);
    this.setThoughtsToStorage(thoughts);
    return this.getThoughts();
  }


  private getThoughtsFromStorage() {
    return JSON.parse(localStorage.getItem('thoughts'));
  }

  private setThoughtsToStorage(thoughts) {
    localStorage.setItem('thoughts', JSON.stringify(thoughts));
  }

}
