if (navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.indexOf("Trident/") > -1) {
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("ie-warning").style.display = "block";
        document.body.classList.add("ie-browser");
    });
}