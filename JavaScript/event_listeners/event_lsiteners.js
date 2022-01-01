let para = document.getElementById('para')
para.addEventListener('mouseover', function () {
    console.log("mouse is over para");
});
para.addEventListener('mouseout', function () {
    console.log("mouse is out of para");
});

function toggleHide() {
    let btn = document.getElementById('btn')
    let para = document.getElementById('para')
    if (para.style.display != 'none') {
        para.style.display = 'none';
        console.log("para is now hidden");
        alert("para is now hidden");
    } else {
        para.style.display = 'block';
        console.log("para is now visible");
        alert("para is now visible");
    }

    // let heading - 1 = document.getElementById('heading-1')


}