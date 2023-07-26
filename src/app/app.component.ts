import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasklength:any=0;
  title = 'My to-do list';
  taskList:string[]=[];
  currentStatus=false;
  

  arrayLengthApp(event:any){
console.log('event', event);
console.log('currentStatus',this.currentStatus);

this.tasklength=event;
if (this.tasklength > 0) {
  this.currentStatus = true;
}else{
  this.currentStatus = false;
}
console.log('currentStatus2',this.currentStatus);
  }
  ngOnInit() {
   
    
    if (this.tasklength > 0) {
      this.currentStatus = true;
    }
  }

}
