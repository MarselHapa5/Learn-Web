let myClickElement = document.getElementsByClassName('button__warning')[0];
let countClick = 0;
console.log(`CountClick =  ${countClick}`);

myClickElement.addEventListener('click', function () {
  if (countClick < 1) {
    countClick++;
    alert(`Щас взорвется комп`);
  }
});
