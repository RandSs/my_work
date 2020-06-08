let marry = require('./work.js')
let jhon = require('./work.js') 
let work = (marry, jhon) => {
    if (marry.time < jhon.time &&  marry.product > jhon.product)
    {console.log("good work marry you have achieved the productivity")}
    else if(marry.time === jhon.time && marry.product === jhon.product) 
    {console.log("well done both of you") }
    else {
        console.log("good work jhon you have achieved productivity")
    }
     
}
 let marryProductivity = new marry(5, 8);
let jhonProductivity = new jhon(5, 8);
work(marryProductivity, jhonProductivity);