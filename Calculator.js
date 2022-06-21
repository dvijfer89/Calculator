let n,n1, n2, result;
function res(operation){
    n1=document.getElementById("n1").value;
    n1=parseFloat(n1);

    n2=document.getElementById("n2").value;
    n2=parseFloat(n2);

    if(operation=='add'){
        result=n1+n2;
    }
    if(operation=='sub'){
        result=n1-n2;
    }
    if(operation=='mul'){
        result=n1*n2;
    }
    if(operation=='div'){
        result=n1/n2;
    }
    document.getElementById("res").innerHTML = result;
}

