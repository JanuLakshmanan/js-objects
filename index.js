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

//-----------------------------------------------------------------