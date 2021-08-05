




function submitOrder(){
 var pest = document.getElementById("pest").value;
 var location = document.getElementById("location").value;
 var name = document.getElementById("name").value;
 var numbers = document.getElementById("numbers").value;




var pestLocationPrice;
    if (location == "nairobi" || location == "utawala" || location == "kasarani") {
        if (pest == "flies" || pest == "ants" || pest == "coackroaches" || pest == "termites") {
            pestLocationPrice = 1000;
        } else if (pest == "textile" || pest == "mice" || pest == "rats" || pest == "bedbugs") {
                pestLocationPrice = 2000;
        
        }
    
  }



  else if (location == "kajiado" || location == "limuru" || location == "kitengela") {
            if (pest == "flies" || pest == "ants" || pest == "coackroaches" || pest == "termites") {
                pestLocationPrice = 1500;
            } else if (pest == "textile" || pest == "mice" || pest == "rats" || pest == "bedbugs") {
                    pestLocationPrice = 3000;
            
            }
           
        }



    var total = parseInt(numbers * pestLocationPrice);
   
 
$(".no").text(numbers);
$(".pname").text(pest);
$(".location").text(location);
$(".total").text(total);
$(".customer").text(name);
$(".delivery-total").text(total);

}


$(document).ready(function(){
        $("#order").click(function(){
            $(".form-list").hide();
            $(".order-list").show();
    
        })
        $(".order-list").click(function(){
            $(".order-list").hide();
            $(".directions").show();
    
        })
        $(".directions").click(function(){
            $(".details").hide();
            $(".directions").show();
    
        })
        $(".directions").click(function(){
            $(".details").hide();
            $(".directions").show();
    
        });
     
       
     
    });
    
    function confirmFumigation(){
        var phone = document.getElementById("phone").value;
        var   place = document.getElementById("place").value;


        $(".place").text(location);
        $(".phone").text(phone);
        $(".feedback").show();
    
    }
