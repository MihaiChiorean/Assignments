function change(element) {
  var copii = document.getElementById("js1").children;
  var clicked =element.getElementsByClassName('icon-box');
    for (var i = 0; i < copii.length; i++) {
      copii[i].classList.remove("active-color");
  }
  element.classList.add("active-color");
  for (var i = 0; i < copii.length; i++) {
    copii[i].getElementsByClassName('icon-box')[0].classList.remove("active-color");
}
clicked[0].classList.add("active-color");
}

function remove(arr, item) {
    for(var i = arr.length; i--;) {
        if(arr[i] === item) {
            arr.splice(i, 1);
        }
    }
}



function changeagain(element) {
  var copii = document.getElementById("myDiv").children;
  var clicked =element.getElementsByClassName('date-box');
  // console.log(clicked[0].classList);
    for (var i = 0; i < copii.length; i++) {
      copii[i].getElementsByClassName('date-box')[0].classList.remove("active-color");
  }
  clicked[0].classList.add("active-color");
}


function addElement() {
  var
    parent = document.getElementById('myDiv'),
    arr = parent.children,
    itm = arr[0],
    cln = itm.cloneNode(true);

  console.log(arr);
  if(arr.length > 5) {
    parent.removeChild(arr[0]);
  }

  cln.removeAttribute('id');
  document.getElementById('myDiv').appendChild(cln);
}


var moveto=['toleft'];

abra();

function abra(){
    moveto.forEach(function(x){
      document.getElementById(x).addEventListener('click',movetoleft);
    });

}

function movetoleft(){
  var array = document.getElementsByClassName('flex-intros');
  if (array[0].classList.contains('default')){
    array[0].classList.remove('default');
    array[2].classList.add('default');
  }else if (array[2].classList.contains('default')){
    array[2].classList.remove('default');
    array[1].classList.add('default');
  }
  else if (array[1].classList.contains('default')){
    array[1].classList.remove('default');
    array[0].classList.add('default');
  }
  else {
    document.getElementsByClassName('default')
  }
}

var movetoo=['toright'];
bbra();

function bbra(){
    movetoo.forEach(function(x){
      document.getElementById(x).addEventListener('click',movetoright);
    });
}
function movetoright(){
  var array = document.getElementsByClassName('flex-intros');
  if (array[0].classList.contains('default')){
    array[0].classList.remove('default');
    array[1].classList.add('default');
  }else if (array[1].classList.contains('default')){
    array[1].classList.remove('default');
    array[2].classList.add('default');
  }
  else if (array[2].classList.contains('default')){
    array[2].classList.remove('default');
    array[0].classList.add('default');
  }
  else {
    document.getElementsByClassName('default')
  }
}
