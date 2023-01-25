// Create a test URLSearchParams object
//https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/forEach

const queryString = window.location.search;
console.log(queryString);

function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}



if(queryString.length > 0){

    const urlParams = new URLSearchParams(queryString);
    
    let myData = "";
    let myCart = "";
    let myTotal = 0; //will store total cost
    myCart += "</h3>Cart Cotents</h3><br>";
    urlParams.forEach(function(value, key) {
      if (key == "Cart"){ //cart
       switch(value){
            case "Widget": 
                myCart += "Widget: 3.99<br>"
                myTotal += 3.99;
            break;

            case "Sprocket": 
            myCart += "Sprocket: 5.99<br>"
            myTotal += 5.99;
            break;

            case "Thingy": 
            myCart += "Thingy: 1.99<br>"
            myTotal += 1.99;
            break;
       }

      
      }else{
        key = key.split("_").join(" ");

        if (key == "First Name" || key == "Last Name" || key == "Address" || key == "City"){
          myData += `<p>${key}: ${titleCase(value)}</p>`;
        } else{
          myData += `<p>${key}: ${value}</p>`;
        }
      }

    });
    
myCart += "Total: " + myTotal + "<br>";
myData = myCart + myData;
myData += '<p><a herf="index.html" >CLEAR</a> </p>'
document.getElementById("output").innerHTML = myData ;
}