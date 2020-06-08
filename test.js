class marry {
    constructor(time, product) {
        this.time = time;
        this.product = product;
    }
};
class jhon {
    constructor(time, product) {
        this.time = time;
        this.product = product;
    }
};

let work = (marry, jhon) => {
    if (marry.time < jhon.time &&  marry.product > jhon.product) {
    console.log("good work marry you have achieved the productivity")}
    else if (marry.time === jhon.time && marry.product === jhon.product)
       
            {console.log("well done both of you") } 
    else {
    
        console.log("good work jhon you have achieved productivity")
     }
    } 
     

let marryWork = new marry(2, 4)
let jhonWork = new jhon(3, 3);
work(marryWork, jhonWork);