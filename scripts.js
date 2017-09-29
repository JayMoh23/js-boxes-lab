document.addEventListener('DOMContentLoaded', function() {
     var btn =document.createElement("button");
     btn.innerText= "Add Square";
     btn.className = 'button';
     document.body.appendChild (btn);

     btn.addEventListener('click', function (){
         var boxDiv= document.createElement('div');
         boxDiv.className = 'boxes';
         document.body.appendChild(boxDiv);

     })

})

