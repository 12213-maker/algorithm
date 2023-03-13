// function Foo() {
//   //这里的getName没有使用var，说明它需要去覆盖之前的值
//   getName = function () { alert (1); };
//   return this;
// }
// Foo.getName = function () { alert (2);};
// Foo.prototype.getName = function () { alert (3);};
// var getName = function () { alert (4);};
// function getName() { alert (5);}

// //请写出以下输出结果：
// Foo.getName(); //2
// getName(); //4
// Foo().getName(); //1
// getName();//1
// new (Foo.getName)();//2
// new Foo().getName();
// new new Foo().getName();


/**
 * Question 1
 */

//  var name = 'window'

//  var person1 = {
//    name: 'person1',
//    show1: function () {
//      console.log(this.name)
//    },
//    show2: () => console.log(this.name),
//    show3: function () {
//      return function () {
//        console.log(this.name)
//      }
//    },
//    show4: function () {
//      return () => console.log(this.name)
//    }
//  }
//  var person2 = { name: 'person2' }
 
//  person1.show1()// person1
//  person1.show1.call(person2) // person2
 
//  person1.show2()// window
//  person1.show2.call(person2) // window
 
//  person1.show3()()// window
//  person1.show3().call(person2) // person2
//  person1.show3.call(person2)()// window
 
//  person1.show4()()// person1
//  person1.show4().call(person2) // person1
//  person1.show4.call(person2)() // person2


/**
 * Question 2
 */
 var name = 'window'

 function Person (name) {
   this.name = name;
   this.show1 = function () {
     console.log(this.name)
   }
   this.show2 = () => console.log(this.name)
   this.show3 = function () {
     return function () {
       console.log(this.name)
     }
   }
   this.show4 = function () {
     return () => console.log(this.name)
   }
 }
 
 var personA = new Person('personA')
 var personB = new Person('personB')
 
 personA.show1()//personA
 personA.show1.call(personB)

 new Person.show1()
 
 personA.show2()
 personA.show2.call(personB)
 
 personA.show3()()
 personA.show3().call(personB)
 personA.show3.call(personB)()
 
 personA.show4()()
 personA.show4().call(personB)
 personA.show4.call(personB)()
