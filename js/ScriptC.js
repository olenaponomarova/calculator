    function button_input(sym_btn){ //додавання символів в строку ввода
         var inum = document.getElementById('input_number');
         inum.value += sym_btn;
     }
     function calculate() {
         var inum = document.getElementById('input_number');
         inum.value = eval(inum.value);
     }
 
     function clearInput() {
         console.log("Clear input");
         var inum = document.getElementById('input_number');
         inum.value = "";
     }
     