class Student{
    name
    age
    phoneNumber
    boardMarks
    static count=0;
    
    constructor(name,age,phoneNumber,boardMarks){
        
        this.name=name
        this.age=age
        this.phoneNumber=phoneNumber
        this.boardMarks=boardMarks
        Student.count++
        
    }
    numOfStudent(){
        console.log('Created student is  '+ Student.count);
    }

    egligibleForCollege(){
        var eligibility= (this.boardMarks >=40)?this.name+' is eligible for college':this.name+ ' is not eligible for college';
        return eligibility;
    }
   setPlacementAge(minPlacementAge){
   return (minMarks)=>{
    if(this.boardMarks > minMarks && this.age >minPlacementAge){
        console.log(this.name + ' is egligible for placement ')
    }else{
        console.log(this.name + " is not egligible for placement")
    
    }

   }
}
}
const students=[new Student('kapil',24,'1234',55),
new Student('shubh',26,'4321',65),
new Student('amit',34,'1233',45),
new Student('shivam',27,'3456',60),
new Student('akshat',23,'9876',70)]

console.log(students[1].egligibleForCollege())
students[0].setPlacementAge(18)(60)

console.log(students.length)

for (let i = 0; i < students.length; i++) {
    if (students[i].boardMarks >= 60 && students[i].age>18) {
        console.log(students[i].name);
 }
}