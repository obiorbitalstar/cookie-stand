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

var infoForm = document.getElementById("newInfo") ; 
console.log(infoForm);

infoForm.addEventListener('submit',function(event){
    console.log(event);
    event.preventDefault();
var location =event.target.location.value; 
var minCustomer = event.target.minCustomers.value;
var maxCustomers = event.target.maxCustomers.value; 
var coockieAvg = event.target.coockieAvg.value ; 

var addLoc = new City (location,parseFloat(coockieAvg),[],[],0,parseInt(minCustomer),parseInt(maxCustomers));
addLoc.cusCount(); 
var tr3 = document.createElement('tr');

salesResule.appendChild(tr3);
var myCookies = document.createElement('td');
        tr3.appendChild(myCookies);
 
       //  salesResule.insertRow(5);
     // var end = salesResule.rows.length() ;
    // salesResule.insertBefore(tr2,tr3);    
        myCookies.textContent = addLoc.name;
for (let  i = 0; i < workingHours.length ; i++){
         myCookies = document.createElement('td');
        tr3.appendChild(myCookies);
        myCookies.textContent = addLoc.cookiesSold[i] ;
      }
      myCookies = document.createElement('td');
      tr3.appendChild(myCookies);
      myCookies.textContent = `${addLoc.total}`;
      console.log(coockieAvg);
      console.log(addLoc);
// name,avgCoockies,customers,cookiesSold,total,minCus,maxCus


});

console.log(infoForm);

City.prototype.totalsOfTotals();

