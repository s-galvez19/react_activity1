class Developer{
    constructor(firstName,lastName){
       this.firstName = firstName;
       this.lastName = lastName;
    }

    getFullName(){
        return this.firstName+ ' '+ this.lastName;
    }
    
}

student = new Developer('Steven','Galvez');
console.log(student.getFullName());

class JavaScriptDeveloper extends Developer {

   
    constructor(job){
       super();
        this.job = job;
    }

   getJob(){
     
      return this.job;
   
   }
}

worker = new JavaScriptDeveloper('Steven', 'Galvez', 'Web Dev');
console.log(worker.getFullName()); 
console.log(worker.getJob());



const myComponent = () =>  "Welcome to React Dev"; 