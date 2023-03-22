import { Component } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';
@Component({
  selector: 'app-root',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent {
  words : string ='';
  bntStyle: string = '';

   Change(content : string) : void{
    this.words = content;
    if(content == 'day'){
      this.bntStyle = 'day';
    }
    else {
      this.bntStyle = 'night';
    }
  }

}
