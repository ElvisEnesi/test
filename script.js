// window pop up
window.addEventListener('load',function () {
    setTimeout(open ,3000)
});

//pop up function
function open(event) {
    document.querySelector('#popup').style.display = "flex";
}

// close pop up
document.querySelector('.icon').addEventListener('click', function() {
    document.querySelector('#popup').style.display = "none";
});

