document.addEventListener('DOMContentLoaded', function() {
     var btn =document.createElement("button");
     btn.innerText= "Add Square";
     btn.className = 'button';
     document.body.appendChild (btn);

     btn.addEventListener('click', function (){
         var boxDiv= document.createElement('div');
         boxDiv.className = 'boxes';
         document.body.appendChild(boxDiv);
         boxDiv.setAttribute("id" , totalSquares.length);
         totalSquares.push(boxDiv);
         boxDiv.innerText= totalSquares.length;

         boxDiv.addEventListener("mouseout", function(){
             event.target.style.color="transparent"
         })

         boxDiv.addEventListener("mouseover", function(){
             event.target.style.color="skyblue"
         })
             
         

         boxDiv.addEventListener('click', function(){
         boxDiv.style.backgroundColor= getRandomColor();

        
         

         })


         boxDiv.addEventListener('dblclick', function () {
            if (boxDiv.previousSibling === btn) {
                alert('Nothing to remove');
           } else if (boxDiv.id % 2 != 0) {
               boxDiv.previousSibling.remove();
           } else if (boxDiv.nextSibling === null) {
               alert('Nothing to remove');
           } else if (boxDiv.id % 2 === 0) {
               boxDiv.nextSibling.remove();
           }

         


         })

     })
    })






var totalSquares = [];

function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i =0; i <6; i++) {
        color += letters [Math. floor(Math.random() *16)];

    }
    return color;
}
