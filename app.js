function appendSymbol(symbol){
   let output = document.getElementById("calculus_span");
   let lastCharacter = output.innerHTML.slice(-1);

   if(lastCharacter === "+" || lastCharacter === "-" || lastCharacter === "*" || lastCharacter === "/"){
       if(isNaN(symbol)){
             return;
       }
   }
    output.innerHTML += symbol;
}

function showResult(){
   let output = document.getElementById("calculus_span");
   output.innerHTML = eval(output.innerHTML);
}

function clearScreen(){
    let output = document.getElementById("calculus_span");
    output.innerHTML = "";
}

function removeLastSymbol(){
    let output = document.getElementById("calculus_span");
    let lastSymbolRemoved = output.innerHTML.substring(0, output.innerHTML.length - 1);
    output.innerHTML = lastSymbolRemoved;
}