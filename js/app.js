'use strict'
var workingHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];

var seattle = {
    name: 'Seattle',
    avgCoockies: 6.3,
    customers: [],
    cookiesSold: [],
    total: 0,
    cusCount: function () {
        for (let i = 0; i < workingHours.length; i++) {
            var anything = Math.floor(Math.random() * (65 - 23) + 23);
            this.customers.push(anything);
            var somthing = Math.floor(this.customers[i] * this.avgCoockies);
            this.cookiesSold.push(somthing);
            this.total = this.total + this.cookiesSold[i];

        }
        console.log(this.customers);
        console.log(this.cookiesSold);
        console.log(this.total);

        return this.total, this.cookiesSold
    }

}
seattle.cusCount()
// console.log(seattle.name);



var tokyo = {
    name: 'Tokyo',
    avgCoockies: 1.3,
    customers: [],
    cookiesSold: [],
    total: 0,
    cusCount: function () {
        for (let i = 0; i < workingHours.length; i++) {
            var anything = Math.floor(Math.random() * (24 - 3) + 3);;

            this.customers.push(anything)
            this.cookiesSold[i] = Math.floor(this.customers[i] * this.avgCoockies);
            this.total = this.total + this.cookiesSold[i];

        }
        console.log(this.customers);
        console.log(this.cookiesSold);

        return this.total, this.cookiesSold, this.total
    }
}
tokyo.cusCount();


var dubai = {
    name: 'Dubai',
    avgCoockies: 3.7,
    customers: [],
    cookiesSold: [],
    total: 0,
    cusCount: function () {
        for (let i = 0; i < workingHours.length; i++) {
            var anything = Math.floor(Math.random() * (38 - 11) + 11);;

            this.customers.push(anything)
            this.cookiesSold[i] = Math.floor(this.customers[i] * this.avgCoockies);
            this.total = this.total + this.cookiesSold[i];

        }
        console.log(this.customers);
        console.log(this.cookiesSold);

        return this.total, this.cookiesSold, this.total
    }
}
dubai.cusCount();



var paris = {
    name: 'Paris',
    avgCoockies: 2.3,
    customers: [],
    cookiesSold: [],
    total: 0,
    cusCount: function () {
        for (let i = 0; i < workingHours.length; i++) {
            var anything = Math.floor(Math.random() * (24 - 3) + 3);;

            this.customers.push(anything)
            this.cookiesSold[i] = Math.floor(this.customers[i] * this.avgCoockies);
            this.total = this.total + this.cookiesSold[i];

        }
        console.log(this.customers);
        console.log(this.cookiesSold);

        return this.total, this.cookiesSold, this.total
    }
}
paris.cusCount();

var lima = {
    name: 'Lima',
    avgCoockies: 4.6,
    customers: [],
    cookiesSold: [],
    total: 0,
    cusCount: function () {
        for (let i = 0; i < workingHours.length; i++) {
            var anything = Math.floor(Math.random() * (16 - 2) + 2);;

            this.customers.push(anything)
            this.cookiesSold[i] = Math.floor(this.customers[i] * this.avgCoockies);
            this.total = this.total + this.cookiesSold[i];

        }
        console.log(this.customers);
        console.log(this.cookiesSold);

        return this.total, this.cookiesSold, this.total
    }
}
lima.cusCount();
var momo = document.getElementById("master")
var container = document.createElement('article');
momo.appendChild(container); 
var pE1 =  document.createElement('p');
container.appendChild(pE1);
pE1.textContent='Seattle';

var ulE1 = document.createElement('ul');
pE1.appendChild(ulE1);

 for (let i = 0; i < workingHours.length; i++) {
    var liE1 = document.createElement('li'); 
     ulE1.appendChild(liE1); 
     liE1.textContent =`${workingHours[i]}  coockies sold   ${seattle.cookiesSold[i]}`  
 }
 liE1.textContent = `Total: ${seattle.total}`

 
//----------------------------
var pE2 =  document.createElement('p');
container.appendChild(pE2);
pE2.textContent='Tokyo';

var ulE2 = document.createElement('ul');
pE2.appendChild(ulE2);

 for (let i = 0; i < workingHours.length; i++) {
    var liE2 = document.createElement('li'); 
     ulE2.appendChild(liE2); 
     liE2.textContent =`${workingHours[i]}  coockies sold   ${tokyo.cookiesSold[i]}`  
 }
 liE2.textContent = `Total: ${tokyo.total}` 
 //-----------------------------
 var pE3 =  document.createElement('p');
container.appendChild(pE3);
pE3.textContent='Dubai';

var ulE3 = document.createElement('ul');
pE3.appendChild(ulE3);

 for (let i = 0; i < workingHours.length; i++) {
    var liE3 = document.createElement('li'); 
     ulE3.appendChild(liE3); 
     liE3.textContent =`${workingHours[i]}  coockies sold   ${dubai.cookiesSold[i]}`  
 }
 liE3.textContent = `Total: ${dubai.total}`  

 //--------------------------------
 
 var pE4 =  document.createElement('p');
 container.appendChild(pE4);
 pE4.textContent='Paris';
 
 var ulE4 = document.createElement('ul');
 pE4.appendChild(ulE4);
 
  for (let i = 0; i < workingHours.length; i++) {
     var liE4 = document.createElement('li'); 
      ulE4.appendChild(liE4); 
      liE4.textContent =`${workingHours[i]}  coockies sold   ${paris.cookiesSold[i]}`  
  }
  liE4.textContent = `Total: ${paris.total}`  
  //----------------------------------
  var pE5 =  document.createElement('p');
container.appendChild(pE5);
pE5.textContent='Lima';

var ulE5 = document.createElement('ul');
pE5.appendChild(ulE5);

 for (let i = 0; i < workingHours.length; i++) {
    var liE5 = document.createElement('li'); 
     ulE5.appendChild(liE5); 
     liE5.textContent =`${workingHours[i]}  coockies sold   ${lima.cookiesSold[i]}`  
 }
 liE5.textContent = `Total: ${paris.total}`  