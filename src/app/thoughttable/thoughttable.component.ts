import { DateChangerPipe } from './datepipe/date-changer.pipe';
import { Component , OnInit} from '@angular/core';
import { Thought } from './thoughtclass/thought';
import { ThoughtService } from './thoughtservice/thoughtservice.service';
import * as moment from 'moment';
@Component({
  selector: 'app-thoughttable',
  templateUrl: './thoughttable.component.html',
  styleUrls: ['./thoughttable.component.css']
})
export class ThoughttableComponent implements OnInit {

private thoughts: Thought[] = [];
text: string;

  constructor(private thoughtService: ThoughtService) {
  }

  ngOnInit() {
    this.thoughts = this.thoughtService.getThoughts();
  }

  keyboard(e: KeyboardEvent) {
    if (e.key === 'Enter' && this.text !== '') {
      const thought = new Thought(this.text, moment.now());
      this.thoughts = this.thoughtService.addThought(thought);
      this.text = '';
    }
  }

  mouseclick() {
    if ( this.text !== '') {
      const thought = new Thought(this.text, moment.now());
      this.thoughts = this.thoughtService.addThought(thought);
      this.text = '';
  }
  }

  delete(index: number) {
    this.thoughts = this.thoughtService.deleteThought(index);
  }



}



