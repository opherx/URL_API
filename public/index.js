let clipButton = document.querySelectorAll('.copy');

for (let i = 0; i < clipButton.length; i++) {
   clipButton[i].addEventListener('click', function() {

      clipButton[i].innerHTML = 'copied it!';
      clipButton[i].style.backgroundColor= "hsl(257, 27%, 26%)";
      let linkContainer = clipButton[i].parentElement;
      let content = linkContainer.querySelector('.shortlink').innerHTML;
      navigator.clipboard.writeText(content);

   });

};
