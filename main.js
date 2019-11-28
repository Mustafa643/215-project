//<!--




function initArray() {
    this.length = initArray.arguments.length
    for (var i = 0; i < this.length; i++)
    this[i+1] = initArray.arguments[i]
 }
//The information is captured and put in a matrix form
function solve (m) {

var a1 = new initArray(parseFloat(document.matrix.a11.value, 10), parseFloat(document.matrix.a12.value, 10), parseFloat(document.matrix.a13.value, 10), parseFloat(document.matrix.a14.value, 10))

var a2 = new initArray(parseFloat(document.matrix.a21.value, 10), parseFloat(document.matrix.a22.value, 10), parseFloat(document.matrix.a23.value, 10), parseFloat(document.matrix.a24.value, 10))

var a3 = new initArray(parseFloat(document.matrix.a31.value, 10), parseFloat(document.matrix.a32.value, 10), parseFloat(document.matrix.a33.value, 10), parseFloat(document.matrix.a34.value, 10))

var t1 = a1
var t2 = a2
var t3 = a3
  


// First we need a one in the first spot

  if (a1[1] == 0) { if (a2[1] != 0) 
                     { for (var i=1; i<=4; i++) {
                      var temp = a2[i]
                           a2[i] = a1[i]
                           a1[i] = temp }   
                
             }
                      }
            if (a1[1] == 0)
              { for (var i=1; i<=4; i++) {
                      var temp = a3[i]
                           a3[i] = a1[i]
                           a1[i] = temp 
                }
              }
               
            if (a1[1] ==0){alert("\rThere is a 0 in the entire first row (no variables involve x)!") }

  if (a1[1] != 0) {   
      var temp = a1[1]
      for (var i=1; i<=4; i++) 
          { a1[i] = a1[i] / temp }
  }           
  
// Now we should have a 1 in the first entry - Now to zero out the column
  
  var temp = -a2[1]

  for ( var i=1; i<=4; i++ ) {
       a2[i] = a2[i] + (a1[i] * temp) }


  var temp = -a3[1]

  for ( var i=1; i<=4; i++ ) {
       a3[i] = a3[i] + (a1[i] * temp) }

// Next Column  Check if 0 - if not put a 1 there
  
  if (a2[2] == 0 ) {          // if = to 0 switch rows
      for (var i=2; i<=4; i++) {
          var temp = a2[i]
               a2[i] = a3[i]
               a3[i] = temp }
  }       
  if (a2[2] == 0 ) {          // if = to 0 switch rows
     alert("\rSystem has infinitely or No solutions!")}
          
  if (a2[2] != 0 ) {              
      var temp = a2[2]
      a2[2] = a2[2] / temp        // for statement would have taken longer
      a2[3] = a2[3] / temp
      a2[4] = a2[4] / temp 
  
// zero out column below

  var temp = -a3[2]

  for ( var i=2; i<=4; i++ ) {
       a3[i] = a3[i] + (a2[i] * temp) }

// zero out column above
  
  var temp = -a1[2]

  for ( var i=2; i<=4; i++ ) {
       a1[i] = a1[i] + (a2[i] * temp) }
  
}   // ends if != 0             
          
          
                                                                  
// Final Column     

  if (a3[3] != 0 ) {              
      var temp = a3[3]
      a3[3] = a3[3] / temp        // for statement would have taken longer
      a3[4] = a3[4] / temp 
         }    
  
        if (a3[3] == 0 ) {        // if = to 0 switch rows
     alert("\rSystem has infinitely or No solutions!")
     }

// zero out column above

  var temp = -a2[3]
  a2[3] = a2[3] + (a3[3] * temp)
  a2[4] = a2[4] + (a3[4] * temp)
  
  var temp = -a1[3]
  a1[3] = a1[3] + (a3[3] * temp)
  a1[4] = a1[4] + (a3[4] * temp)  
  




m.x1.value=a1[4]
m.x2.value=a2[4]
m.x3.value=a3[4]

  
}
  

//-->