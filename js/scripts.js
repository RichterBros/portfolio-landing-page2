$(document).ready(function(){
   
    $( "#box1" ).click(function() {
        card.box1Switch();
        card.box2Reverse();
        card.box3Reverse();
    });
    
    $( "#box2" ).click(function() {
         card.box2Switch();
         card.box3Reverse();
         card.box1Reverse();
    });
    
    $( "#box3" ).click(function() {
        card.box3Switch();
        card.box1Reverse();
        card.box2Reverse();
    });
    
    
 
});

    
    

function Card(box1, box2, box3, box4){
    this.box1 = box1;
    this.box2 = box2;
    this.box3 = box3;
    this.box4 = box4;

}    
    
var card = new Card(); 
  
Card.prototype.box1Switch = function(){

    box1 = anime({
        targets: '#box1',
        translateX: 550,
        translateY: 400,
        scale: 7 ,
        backgroundColor: '#zzz',
        duration: 3000,
        loop: false,
        direction: 'normal'
    });
}
Card.prototype.box2Switch = function(){
    
    box2 = anime({
        targets: '#box2',
        translateX: 550,
        translateY: 400,
        scale: 7 ,
        backgroundColor: '#zzz',
        duration: 3000,
        loop: false,
        direction: 'normal',
    });
}

    Card.prototype.box3Switch = function(){
    
        box2 = anime({
            targets: '#box3',
            translateX: 550,
            translateY: 400,
            scale: 7 ,
            backgroundColor: '#zzz',
            duration: 3000,
            loop: false,
            direction: 'normal',
        });
    }   
Card.prototype.box1Reverse = function(){
    
    anime({
        targets: '#box1',
        translateX: 0,
        translateY: 0,
        scale: 1 ,
        backgroundColor: '#zzz',
        duration: 3000,
        loop: false,
        direction: 'normal'
    });
}

Card.prototype.box2Reverse = function(){
    
    anime({
        targets: '#box2',
        translateX: 0,
        translateY: 0,
        scale: 1 ,
        backgroundColor: '#zzz',
        duration: 3000,
        loop: false,
        direction: 'normal'
    });
}

Card.prototype.box3Reverse = function(){
    
    anime({
        targets: '#box3',
        translateX: 0,
        translateY: 0,
        scale: 1 ,
        backgroundColor: '#zzz',
        duration: 3000,
        loop: false,
        direction: 'normal'
    });
}
