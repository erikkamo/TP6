function changeColor() {
  document.getElementById("title").style.color = 'blue';
}

function showList1() {
   var element = document.getElementById("list1");
   element.classList.toggle("hide");
}

function showList2() {
   var element = document.getElementById("list2");
   element.classList.toggle("hide");
}

function showList3() {
   var element = document.getElementById("list3");
   element.classList.toggle("hide");
}

function change() {
    document.getElementById("title").style.color="black";
}

document.body.innerHTML += "Page Built by Erikka Moore";