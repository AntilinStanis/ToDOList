import { Component, OnInit ,NgModule,Input, Output, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent   {

  @Input('taskList') taskList: any;
  @Output() arrayLength = new EventEmitter<any>();
  constructor(private http:HttpClient){}
newTask:string="";
addTask="";

addNewTask(){
  
  this.addTask=this.newTask;
  let createTask=this.newTask;
  console.log("This is this.newTask",this.newTask);
  console.log("This is createTask",createTask);
  
  
  this.taskList.unshift(this.addTask);
  localStorage.setItem('my_tasks',JSON.stringify(this.taskList) )
  this.newTask="";
  console.log("The elements of the task array",this.taskList.length);
  this.arrayLength.emit(this.taskList.length)
  let todoList={
    tasks:createTask
  };
  this.http.post('http://localhost:3000/todoList/insertToDOList',todoList).subscribe((result)=>{
    console.log("The result is",result);
    
  })
  console.log("The todolist is",todoList.tasks);
  
}

}


