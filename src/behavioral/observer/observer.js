class Auctioneer
{
    constructor(){
        this.bidderList = []
    }
    
    announceNewBidderPrice()
    {
        this.notifyBidders();
    }
     
    registerBidder(bidder)
    {
        this.bidderList.push(bidder);
    }
    
    notifyBidders()
    {
        this.bidderList.forEach(bidder => bidder.update())
    }
}


class Bidder 
{
    constructor(name){
        this.name = name
        this.bidPrice = null
    }
    
    update()
    {
        console.log(`${this.name} is offering ${this.bidPrice} dollars`);
        if (this.bidPrice > 500)
        {
            console.log(`Sold to ${this.name}`);
        }
    }
        
    giveNewPrice(price)
    {
        this.bidPrice = price;
    }
}

auctioner = new Auctioneer();
bidder1 = new Bidder("Ross");
auctioner.registerBidder(bidder1);
bidder2 = new Bidder("Joey");
auctioner.registerBidder(bidder2);
bidder1.giveNewPrice(200);
bidder2.giveNewPrice(350);
auctioner.announceNewBidderPrice()
bidder1.giveNewPrice(400);
bidder2.giveNewPrice(550);
auctioner.announceNewBidderPrice()


// function Click() {
//     this.handlers = [];  // observers
// }

// Click.prototype = {

//     subscribe: function (fn) {
//         this.handlers.push(fn);
//     },

//     unsubscribe: function (fn) {
//         this.handlers = this.handlers.filter(
//             function (item) {
//                 if (item !== fn) {
//                     return item;
//                 }
//             }
//         );
//     },

//     fire: function (o, thisObj) {
//         var scope = thisObj || window;
//         this.handlers.forEach(function (item) {
//             item.call(scope, o);
//         });
//     }
// }

// function run() {

//     var clickHandler = function (item) {
//         console.log("fired: " + item);
//     };

//     var click = new Click();

//     click.subscribe(clickHandler);
//     click.fire('event #1');
//     click.unsubscribe(clickHandler);
//     click.fire('event #2');
//     click.subscribe(clickHandler);
//     click.fire('event #3');
// }
