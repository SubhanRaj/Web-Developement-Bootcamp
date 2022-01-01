let navbar = document.getElementById('navbar');
console.log(navbar);
let ul = document.getElementById('ul');
console.log(ul);

let menu_change = confirm("Do you want to change menu?")
if (menu_change) {
    ul.innerHTML;
    ul.innerHTML = "<li>Dynamic Element</li>";
} else {
    ul;
}