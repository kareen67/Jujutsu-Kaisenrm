function showhide() {
    var tarjetaadicional = document.getElementsByClassName("tarjetaadicional")[0];
    

    if (tarjetaadicional.style.display == "none")
    {tarjetaadicional.style.display="flex";}
    else{
        tarjetaadicional.style.display="none";
       
    }
}