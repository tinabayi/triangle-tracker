
   // Create a function with alert in case condition is true
   function myFunction() {
        var side1 = parseInt(document.getElementById("myNumber1").value);
        var side2 =parseInt(document.getElementById("myNumber2").value);
        var side3 = parseInt(document.getElementById("myNumber3").value);

        var sides = []
        var sides=parseInt( sides.concat([side1, side2, side3]));

        if((side1 + side2 <= side3 && side2+ side1 <= side3) || 
            (side2 + side3 <= side1 && side3 + side2 <= side1) || 
            (side1 + side3 <= side2 && side3 + side1 <= side2)){
            alert("Is not a triangle")
            return
        }
        
       if(side1 === side2 && side1 === side3 && side2 === side3){
            alert("Triangle is Equilateral")
        }
        else if(side1 === side2 || side1===side3 ||side2===side3){
            alert("Triangle is isocele")
        }
        else if((side1+side2 > side3) || side1+side3 > side2 || side2+side3 > side1){
            alert("Triangle is Scalene")
        }
        else{
            alert('nothing')
        }
    };

    
    
    