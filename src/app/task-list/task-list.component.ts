import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent  {
  Completed="Complete";
  constructor(private http:HttpClient){}
@Input('tasks') tasks: any;
@Output() arrayLength = new EventEmitter<any>();
listColor="";
removeTask(index:number){
  console.log("The index is",index);
let deleteList=index;
let deleteArray={
  id:deleteList
}

this.tasks.splice(index,1);
console.log('remove',this.tasks.length);

this.arrayLength.emit(this.tasks.length)
this.http.post('http://localhost:3000/todoList/deleteToDoList',deleteArray).subscribe((result)=>{
console.log("The result is",result);
})
}

complete(){
  
    this.Completed="Completed"
    
    // setTimeout(() => {
    //   this.Completed = "Complete";
    // }, 3000);
 
 
}

}
