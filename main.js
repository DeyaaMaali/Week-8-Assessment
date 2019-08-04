console.log('GOOD LUCK 👩‍💻 👨‍💻')
// Please focus

/* Q1:
Convert ES5 to ES6:
1) 
function sum(x,y){
  return x+y
}



2) 
function consoleReturn(x,y){
  console.log(x)
  return y
}

3) 
var name="Alex"
var age=25
var result="My name is: " + name + "and my age is: " + age

4)
var food="Fried Chicken"
var color="Blue"
var object={
  food:food,
  color:color
}

5)
var object2={
  multi:function(a,b){
    return a * b
  }
}
*/

//1) WRITE YOUR CODE UNDER THIS LINE  
sum = (x,y) => x+y

//iam not sure about this syntax, maybe the syntax is like this sum (x,y) => x+y

//2) WRITE YOUR CODE UNDER THIS LINE         
consoleReturn = (x,y) => {
  console.log(x);
  return y;
}

//iam not sure about this syntax, maybe the syntax is like this consoleReturn (x,y) => {console.log(x); return y;}

//3) WRITE YOUR CODE UNDER THIS LINE         
let name = "Alex";
let age = 25;
let result=`my name is: $(name) and my age is $(age)`
//4) WRITE YOUR CODE UNDER THIS LINE         
let food="Fried Chicken";
let color="Blue";
let object = {
  food,
  color,
}
//5) WRITE YOUR CODE UNDER THIS LINE         
let object = {
  multi = (a,b) => a * b
}






/* Q2:
Using OOP
Create a class called Computer
that takes three parameter (OS,RAM,CPU)
and a method called doubleRAM the ram to double and return the new ram
and make three instantiations from it
computer1 => Windows,16,I7
computer2 => Linux,8,I5
computer3 => Mac,4,I3

Example: 
computer1
Output =>
{
  OS:'Windows',
  RAM:16,
  CPU:'I7',
  doubleRAM:f(){}
}
*/

// WRITE YOUR CODE UNDER THIS LINE

class Computer {
  constructor(OS,RAM,CPU)
  {
    this.os= OS
    this.ram= RAM
    this.cpu= CPU
  }

  doubleRAM (){
    this.ram *= 2;
    return this.ram;
  }
}

let computer1 = new Computer("Windows", 16, "I7");
let computer2 = new Computer("Linux", 8, "I5");
let computer3 = new Computer("Mac", 4, "I3");



/* Q3:
You have this two react components
please fix the errors inside them
*/

// App Component
import React, { Component } from 'react'; /* Imported Component*/
import Tasks from './components/Tasks';

export default class App extends Component {
  state = {
    title: 'ELIZABETH GREENE',
    todos: ['eat', 'eat eat', 'eact again']
  };
  changeTitle = () => { /* Changed the function to arrow function to get (this)*/
    this.setState = {title:'AGGREGOR ZOLDYCK'} /* added this.setState ={title:'AGGREGOR ZOLDYCK'}*/
  }
  render() {
    return (
      <> {/* added empty fragment*/}
      <h1>App Component => {this.state.title}</h1> {/* added curly brackets to get the title value .. and changed it to this.state.title*/}
      <button onClick={this.changeTitle}>Change Title</button> {/* we can bind (this) instead of making the function arrow function*/}
      <Tasks tasks={this.todos} changeTitleFromChild={this.changeTitle} /> {/* we can bind (this) instead of making the function arrow function*/}
      </>
    );
  }
}

// Tasks Component
import React, { Component } from 'react';

export default class Tasks extends Component { /* added export default */
  state = {
    day: "Sat"
  };
  changeDay = () => { /* Changed the function to arrow function to get (this)*/
    this.setState = {day: 'Sun'} /* added this.setState ={day: 'Sun'}*/
  }

  render() {
    return (
      <div>
        <h1>Tasks Component => {this.state.day}</h1> {/* added curly brackets to get the day value .. and changed it to this.state.day*/}
        <button onClick={this.changeDay}>Change Tasks State</button>
        <button onClick={this.props.changeTitleFromChild}>Change App State</button> {/* added props.changeTitleFromChild*/}
      </div>
    );
  }
}
