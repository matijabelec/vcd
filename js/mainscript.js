/*******************************************************
 * project: Visual code demonstrator
 *  author: Matija Belec
 *    date: 23.05.2015
 ********************************************************/

// main Vcd class
function Vcd() {}
Vcd.prototype = {
    // canvas element
    canvas: null,
    
    // canvas draw context
    screen: null,
    
    // size of canvas
    width: 0,
    height: 0,
    
    // prepare canvas and object atributes
    init: function(id) {
        this.canvas = document.getElementById(id);
        if(this.canvas) {
            this.width = this.canvas.getAttribute('width');
            this.height = this.canvas.getAttribute('height');
            this.screen = this.canvas.getContext('2d');
        }
        return this;
    },
    
    // test function (early development stage)
    draw: function() {
        if(this.screen !== null) {
            // rectangle in the middle
            this.screen.fillStyle = '#4477DD';
            this.screen.fillRect(this.width*0.2, this.height*0.3, this.width*0.6, this.height*0.4);
            
            // text output
            this.screen.font = "18px Arial";
            this.screen.fillText("Visual code demonstrator", this.width*0.211, this.height*0.25);
            this.screen.fillText("by Matija Belec", this.width*0.324, this.height*0.8);
        }
        return this;
    }
}

// test Vcd implementation
var test = new Vcd();
test.init('vcd1').draw();
