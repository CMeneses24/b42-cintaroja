//definicion de objeto literal
const persona1 ={
  //  clave valor
  name:'mali',
  age:21,
  isHuman: true,
  getAge () {
      return this.age;
  },
  //ECMA 5 
  setAge(newAge) {
      this.age=newAge;
  }
};

persona1.setAge(22);
// ` (siempre a string), poner variables con $ variable.subelemento llama el dato subelemento
console.log(`hola soy ${persona1.name} tengo ${persona1.getAge()} años`);