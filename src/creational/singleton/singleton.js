var Singleton = (function () {
    var instance;

    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

function run() {

    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();

    console.log("Same instance? " + (instance1 === instance2));
}



// let instance = null;
// class Printer {
//     constructor(pages) {
//         this.display= function(){
//             console.log(`You are connected to the printer. You want to print ${pages} pages.`)
//         }
//     }
//
//     static getInstance(numOfpages){
//         if(!instance){
//             instance = new Printer(numOfpages);
//         }
//         return instance;
//     }
// }
//
// var obj1 = Printer.getInstance(2)
// console.log(obj1)
// obj1.display()
// var obj2 = Printer.getInstance(3)
// console.log(obj2)
// obj2.display()
// console.log(obj2 == obj1)