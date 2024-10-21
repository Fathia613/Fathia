const myWife = "Ayomide";

const myAge = 18;

const isMarried = true;

let  myFuturewife;

 myFuturewife = "Grace"

let mywhatever = null;





let students = ["kimi", "victor", "ella", "precious", "jomi"];

let updatestudents = students.push("destiny");

let removeLastStudent = students.pop();

let removestudent = students.splice(2, 1);

console.log("students:", students);

//  //to hide and show navigation links
const myNav = document.getElementById('myNav');
const openNav = document.getElementById('openBtn');
const closeNav = document.getElementById('closeBtn');



function hideNav(){
    if(myNav.style.display === "flex"){
        myNav.style.display = "none"
    }

    else{
        myNav.style.display = "flex"
    }
}


openNav.addEventListener('click', hideNav);
closeNav.addEventListener('click', hideNav);

