// button clicking
function handelClickBtn() {
   let Status = document.getElementById('Tst');
   Status.innerHTML=`
   <p class="js_Text">Howrah</p>
   `
   alert("card is add")
}

// input field
document.getElementById('comment').addEventListener('click',function(){
   let input = document.getElementById('InText');
   let inputText = input.value;
   let comment = document.getElementById('commentText');
   comment.innerText = inputText;
   input.value = ''
})


