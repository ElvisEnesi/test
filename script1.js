     
window.addEventListener('load', function () {
    setTimeout(
        function open(event) {
            document.querySelector('#myDiv').style.display = "block";
            document.querySelector('.round').style.display = "none";
        },5000
    )
})