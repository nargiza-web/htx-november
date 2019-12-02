
$(document).ready(function() {

    $( "#div1" ).click(function() {
        alert( "Handler for .click() called." );
      });

    let para =  $("<p>") 
    console.log(para)   

    //$("#div1") // access by id # 
    //$(".li-item") // access by class 

    $("#div1").css('background-color','yellow')
    .addClass("foo")
    .append("<p>Para</p>")
    

})