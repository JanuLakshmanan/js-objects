//objeect creation with braces

//object creation
const person={                 
  id:90028,
  name:'janu',
  school:'KMHSS',
  location:'CDM',
  college:'SREC',
  Blood:'O+ve',
  getId:function(){
    return this.id;
  },
  getName:function(){
    return this.name;
  },
  getSchool:function(){
    return this.school;
  },
  getLocation:function(){
    return this.location;
  },
  getCollege:function(){
    return this.college;
  },
  getBlood:function(){
    return this.Blood;
  },
setId:function(ID){
     this.id=ID;
  },
  setName:function(NAME){
     this.name=NAME;
  },
  setSchool:function(SCHOOL){
     this.school=SCHOOL;
  },
  setLocation:function(LOCATION){
     this.location=LOCATION;
  },
  setCollege:function(COLLEGE){
     this.college=COLLEGE;
  },
  setBlood:function(BLOOD){
     this.Blood=BLOOD;
  }

};

//getters
let id=person.getId();
console.log('Id:',id);
let name = person.getName();
console.log('Name:',name);
let school=person.getSchool();
console.log('School:',school);
let college = person.getCollege();
console.log('College:',college);
let Location=person.getLocation();
console.log('Location:',Location);
let Blood = person.getBlood();
console.log('Blood:',Blood);

console.log("//After setting values//");
//setters
person.setId(90027)
id=person.getId();
console.log('Id:',id);
person.setName('Shwetha')
 name = person.getName();
console.log('Name:',name);
person.setSchool('Athena')
 school=person.getSchool();
console.log('School:',school);
person.setCollege('PSG');
 college = person.getCollege();
console.log('College:',college);
person.setLocation('CBE');
 Location=person.getLocation();
console.log('Location:',Location);
person.setBlood('B+ve')
 Blood = person.getBlood();
console.log('Blood:',Blood);

//console.log(Object.keys(person));
//-----------------------------------------------------------------

///object task-----------------------------------------------------
/*function Detail(name,mark1,mark2,mark3){

   this.name=name;
   this.mark1=mark1;
   this.mark2=mark2;
   this.mark3=mark3;     
   this.getMarks=function(){
       return {name:this.name,mark1:this.mark1,mark2:this.mark2,mark3:this.mark3};
   }
   this.getTotal=function() {
       this.totalvalue=this.mark1+this.mark2+this.mark3;
       this.total={name:this.name,total:this.totalvalue};
       return  this.total;
   }
   this.getAvg=function() {
    this.avgvalue=this.totalvalue/3;
    this.average={name:this.name,avg:this.avgvalue};
    return  this.average;
}

 this.getTotDet=function(){
      
    this.totaldetail={name:this.name,total:this.totalvalue,average:this.avgvalue};
    return this.totaldetail;
 }

}

var name,mark1,mark2,mark3;
 name=prompt("Enter your name");
while(isNaN(mark1)||mark1>100||mark1<0)
{
     mark1=prompt("Enter a valid mark1");
}
while(isNaN(mark2)||mark2>100 ||mark2<0)
{
var mark2=prompt("Enter   valid mark2");
}
while(isNaN(mark3)||mark3>100||mark3<0)
{
 mark3=prompt("Enter a valid mark3");
}
const detail= new Detail(name,parseInt(mark1),parseInt(mark2),parseInt(mark3));
console.log(detail.getMarks());

const total=detail.getTotal(); 
console.log(total);

const average=detail.getAvg(); 
console.log(average);

const totaldetail=detail.getTotDet();
console.log(totaldetail);
*/



