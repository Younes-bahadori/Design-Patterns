// class ReverseIterator {
//     constructor(elements) {
//         this.keys = Object.keys(elements)
//         this.index = this.keys.length - 1
//         this.elements = elements
//     }
//
//     hasprevElement() {
//         return this.index >=0
//     }
//
//     last(){
//         this.index = this.keys.length - 1
//         return this.elements[this.keys[this.index]]
//     }
//
//     previous(){
//         if(this.index >= 0){
//             return  this.elements[this.keys[--this.index]]
//         }else{
//             return null
//         }
//
//     }
// }
//
//
// function reverseIterate(items){
//     var iter = new ReverseIterator(items)
//
//     for(var i = iter.last();iter.hasprevElement(); i = iter.previous()){
//         console.log(i)
//     }
// }
// reverseIterate({'name': 'Anne', 'age': '23', 'gender': 'Female', 'Occupation': 'Engineer'})

var Iterator = function (items) {
    this.index = 0;
    this.items = items;
}

Iterator.prototype = {
    first: function () {
        this.reset();
        return this.next();
    },
    next: function () {
        return this.items[this.index++];
    },
    hasNext: function () {
        return this.index <= this.items.length;
    },
    reset: function () {
        this.index = 0;
    },
    each: function (callback) {
        for (var item = this.first(); this.hasNext(); item = this.next()) {
            callback(item);
        }
    }
}

function run() {

    var items = ["one", 2, "circle", true, "Applepie"];
    var iter = new Iterator(items);

    // using for loop

    for (var item = iter.first(); iter.hasNext(); item = iter.next()) {
        console.log(item);
    }
    console.log("");

    // using Iterator's each method

    iter.each(function (item) {
        console.log(item);
    });
}
