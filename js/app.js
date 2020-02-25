'use strict'
var workingHours = ['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM'];

var  contaner = document.getElementById('sales');
  var  article1 = document.createElement('article');
  contaner.appendChild(article1);
   var salesResule = document.createElement('table');
contaner.appendChild(salesResule);
var tr1 = document.createElement('tr');
salesResule.appendChild(tr1);
var myCookies = document.createElement('th');
        tr1.appendChild(myCookies);

function City (name,avgCoockies,customers,cookiesSold,total,minCus,maxCus){
    this.name=name;
    this.avgCoockies = avgCoockies; 
    this.customers = customers; 
    this.cookiesSold = cookiesSold; 
    this.total = total; 
    this.minCus= minCus; 
    this.maxCus = maxCus; 
}
 City.prototype.cusCount= function() {
    for (let i = 0; i < workingHours.length; i++) {
        var anything = Math.floor(Math.random() * (this.maxCus- this.minCus) + this.minCus);
        this.customers.push(anything);
        var somthing = Math.floor(this.customers[i] * this.avgCoockies);
        this.cookiesSold.push(somthing);
        this.total = this.total + this.cookiesSold[i];
        
    }
    console.log(this.customers);
    console.log(this.cookiesSold);
    console.log(this.total);
    
    return this.total, this.cookiesSold;
    
    
}
 City.prototype.tableHeader= function() { 
   
            myCookies.textContent = "          ";
    for (let i = 0; i < workingHours.length ; i++){
             myCookies = document.createElement('th');
            tr1.appendChild(myCookies);
            myCookies.textContent = workingHours[i] ;
          }
          myCookies = document.createElement('th');
          tr1.appendChild(myCookies);
          myCookies.textContent = "Daily location total";
 
 }


City.prototype.render=function (){

var tr2 = document.createElement('tr');
salesResule.appendChild(tr2);
var myCookies = document.createElement('td');
        tr2.appendChild(myCookies);
        myCookies.textContent = this.name;
for (let  i = 0; i < workingHours.length ; i++){
         myCookies = document.createElement('td');
        tr2.appendChild(myCookies);
        myCookies.textContent = this.cookiesSold[i] ;
      }
      myCookies = document.createElement('td');
      tr2.appendChild(myCookies);
      myCookies.textContent = `${this.total}`;
 }



 City.prototype.totalsOfTotals= function() { 
var tr3 = document.createElement('tr');
salesResule.appendChild(tr3); 
var myCookies = document.createElement('td');
        tr3.appendChild(myCookies);
        myCookies.textContent ='Total';
        var totalOfTotals = 0 ; 
for (let  i = 0; i < workingHours.length ; i++){
    var colSum = 0 ; 
    for (let j = 0; j < nations.length; j++) {
        
       colSum    +=  nations[j].cookiesSold[i];
        
    }
    totalOfTotals += colSum;
    myCookies=document.createElement('td');
    tr3.appendChild(myCookies); 
    myCookies.innerHTML=colSum ;


      }
     myCookies=document.createElement('td'); 
     tr3.appendChild(myCookies);
     myCookies.textContent= totalOfTotals;
 }

var seattle = new City ('Seattle',6.3,[],[],0,23,65);
var tokyo = new City("Tokyo",1.3,[],[],0,3,24);
var dubai = new City("Dubai",3.7,[],[],0,4,38);
var paris = new City ("Paris",4.7,[],[],0,6,38);
var lima = new City("Lima",6.3,[],[],0,23,65);

var nations = [seattle,tokyo,dubai,paris,lima]; 
City.prototype.tableHeader();

for (let i = 0; i < nations.length; i++) {
    nations[i].cusCount(); 
    nations[i].render(); 
    console.log(nations[i]);
}
City.prototype.totalsOfTotals();

// var seattle = {
//     name: 'Seattle',
//     avgCoockies: 6.3,
//     customers: [],
//     cookiesSold: [],
//     total: 0,
//     cusCount: function () {
//         for (let i = 0; i < workingHours.length; i++) {
//             var anything = Math.floor(Math.random() * (65 - 23) + 23);
//             this.customers.push(anything);
//             var somthing = Math.floor(this.customers[i] * this.avgCoockies);
//             this.cookiesSold.push(somthing);
//             this.total = this.total + this.cookiesSold[i];

//         }
//         console.log(this.customers);
//         console.log(this.cookiesSold);
//         console.log(this.total);

//         return this.total, this.cookiesSold
//     }

// }
// seattle.cusCount()
// // console.log(seattle.name);



// var tokyo = {
//     name: 'Tokyo',
//     avgCoockies: 1.3,
//     customers: [],
//     cookiesSold: [],
//     total: 0,
//     cusCount: function () {
//         for (let i = 0; i < workingHours.length; i++) {
//             var anything = Math.floor(Math.random() * (24 - 3) + 3);;

//             this.customers.push(anything)
//             this.cookiesSold[i] = Math.floor(this.customers[i] * this.avgCoockies);
//             this.total = this.total + this.cookiesSold[i];

//         }
//         console.log(this.customers);
//         console.log(this.cookiesSold);

//         return this.total, this.cookiesSold, this.total
//     }
// }
// tokyo.cusCount();


// var dubai = {
//     name: 'Dubai',
//     avgCoockies: 3.7,
//     customers: [],
//     cookiesSold: [],
//     total: 0,
//     cusCount: function () {
//         for (let i = 0; i < workingHours.length; i++) {
//             var anything = Math.floor(Math.random() * (38 - 11) + 11);;

//             this.customers.push(anything)
//             this.cookiesSold[i] = Math.floor(this.customers[i] * this.avgCoockies);
//             this.total = this.total + this.cookiesSold[i];

//         }
//         console.log(this.customers);
//         console.log(this.cookiesSold);

//         return this.total, this.cookiesSold, this.total
//     }
// }
// dubai.cusCount();



// var paris = {
//     name: 'Paris',
//     avgCoockies: 2.3,
//     customers: [],
//     cookiesSold: [],
//     total: 0,
//     cusCount: function () {
//         for (let i = 0; i < workingHours.length; i++) {
//             var anything = Math.floor(Math.random() * (24 - 3) + 3);;

//             this.customers.push(anything)
//             this.cookiesSold[i] = Math.floor(this.customers[i] * this.avgCoockies);
//             this.total = this.total + this.cookiesSold[i];

//         }
//         console.log(this.customers);
//         console.log(this.cookiesSold);

//         return this.total, this.cookiesSold, this.total
//     }
// }
// paris.cusCount();

// var lima = {
//     name: 'Lima',
//     avgCoockies: 4.6,
//     customers: [],
//     cookiesSold: [],
//     total: 0,
//     cusCount: function () {
//         for (let i = 0; i < workingHours.length; i++) {
//             var anything = Math.floor(Math.random() * (16 - 2) + 2);;

//             this.customers.push(anything)
//             this.cookiesSold[i] = Math.floor(this.customers[i] * this.avgCoockies);
//             this.total = this.total + this.cookiesSold[i];

//         }
//         console.log(this.customers);
//         console.log(this.cookiesSold);

//         return this.total, this.cookiesSold, this.total
//     }
// }
// lima.cusCount();
// var momo = document.getElementById("master")
// var container = document.createElement('article');
// momo.appendChild(container);
// var pE1 = document.createElement('p');
// container.appendChild(pE1);
// pE1.textContent = 'Seattle';

// var ulE1 = document.createElement('ul');
// pE1.appendChild(ulE1);

// for (let i = 0; i < workingHours.length; i++) {
//     var liE1 = document.createElement('li');
//     ulE1.appendChild(liE1);
//     liE1.textContent = `${workingHours[i]}  coockies sold   ${seattle.cookiesSold[i]}`
// }
// liE1.textContent = `Total: ${seattle.total}`


// //----------------------------
// var pE2 = document.createElement('p');
// container.appendChild(pE2);
// pE2.textContent = 'Tokyo';

// var ulE2 = document.createElement('ul');
// pE2.appendChild(ulE2);

// for (let i = 0; i < workingHours.length; i++) {
//     var liE2 = document.createElement('li');
//     ulE2.appendChild(liE2);
//     liE2.textContent = `${workingHours[i]}  coockies sold   ${tokyo.cookiesSold[i]}`
// }
// liE2.textContent = `Total: ${tokyo.total}`
// //-----------------------------
// var pE3 = document.createElement('p');
// container.appendChild(pE3);
// pE3.textContent = 'Dubai';

// var ulE3 = document.createElement('ul');
// pE3.appendChild(ulE3);

// for (let i = 0; i < workingHours.length; i++) {
//     var liE3 = document.createElement('li');
//     ulE3.appendChild(liE3);
//     liE3.textContent = `${workingHours[i]}  coockies sold   ${dubai.cookiesSold[i]}`
// }
// liE3.textContent = `Total: ${dubai.total}`

// //--------------------------------

// var pE4 = document.createElement('p');
// container.appendChild(pE4);
// pE4.textContent = 'Paris';

// var ulE4 = document.createElement('ul');
// pE4.appendChild(ulE4);

// for (let i = 0; i < workingHours.length; i++) {
//     var liE4 = document.createElement('li');
//     ulE4.appendChild(liE4);
//     liE4.textContent = `${workingHours[i]}  coockies sold   ${paris.cookiesSold[i]}`
// }
// liE4.textContent = `Total: ${paris.total}`
// //----------------------------------
// var pE5 = document.createElement('p');
// container.appendChild(pE5);
// pE5.textContent = 'Lima';

// var ulE5 = document.createElement('ul');
// pE5.appendChild(ulE5);

// for (let i = 0; i < workingHours.length; i++) {
//     var liE5 = document.createElement('li');
//     ulE5.appendChild(liE5);
//     liE5.textContent = `${workingHours[i]}  coockies sold   ${lima.cookiesSold[i]}`
// }
// liE5.textContent = `Total: ${paris.total}`;
