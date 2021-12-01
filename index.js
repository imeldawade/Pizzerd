$(document).ready(function(){


    var name = document.getElementById("name");
    var mail = document.getElementById("email");
    var toppings = document.getElementById("tops");
    var crust = document.getElementById("crust");
    var sizes = document.getElementById("size");
    var location = document.getElementById("location");
    var story = document.getElementsByClassName("lorem");

    $("#btn").click(function(event){
        event.preventDefault()
        getName()
        getMail()
        getToppings()
        getCrusts()
        getSizes()
        getLocation()
        getStory()
    })



    function getName(){
        if(name.value){
            hi = name.value
            mess = "Thank you "
            // alert(mess + hi)
        }else if(name.value.length <= 1){
            alert("name please")
        }
    }


    function getMail(){
        if(mail.value){
            em = "your email has been recorded"
            alert(mail.value+ " " +em)
        }else{
            alert("email's optional anyway")
        }
    }


    function getToppings(){
        if(toppings.value){
            alert("You have picked "+toppings.value+" as your preferred topping" )
        }else{
            alert("Pizza without topping is like ugali without stew !")
        }
    }

    function getCrusts(){
        if(crust.value){
            alert("you picked "+crust.value+" as a crust")
        }else{
            alert("Default crust is the Flat-bread")
        }
    }

    function getSizes(){
        if(sizes.value){
            alert(sizes.value+" is a great size pick")
        }else{
            alert("default size is medium")
        }
    }

    function getLocation(){
        if(location.value){
            alert("Your "+sizes.value+ " pizza will be delivered to " +location.value+ " in a few minutes" )
        }
    }


    function getStory(){
        if(sizes.value == "Small"){
            priseze = 300
        }else if(sizes.value == "Medium"){
            priseze = 500
        }else if(sizes.value == "Large"){
            priseze = 700
        }else{
            priseze = 0
        }

        var top = document.getElementById("tops").value
        if(!top){
            toprice = 0
        }else {
            toprice = 60
        }


        if(crust.value == "Cracker" || crust.value == "Flat-bread" || crust.value == "Thin"){
            crusize = 100
        }else if( crust.value == "Large") {
            crusize = 200
        }else{
            crusize = 0
        }


        var total = priseze + toprice + crusize;
        var say = document.getElementsByClassName("lorem").textContent = "A "+sizes.value+ "(" +priseze+")"+" with "+toppings.value+ " topping "+ "(" +toprice+ ")" +" on a "+crust.value+ " crust " +"("+ crusize +")" + " costs ksh."+ total ;
        alert(say)
        
    }
})