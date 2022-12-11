(function () {
    const navbar = document.getElementById("navbar");
    const image1 = document.getElementById("header_image_first");
    const image2 = document.getElementById("header_image_second");
    const main = document.getElementsByTagName("main");

    navbar.addEventListener("mouseover", function () {
        if(image1.getAttribute("src") == "/images/spideygif.gif") {
            return;
        } else {
            image1.setAttribute("src", "/images/spideygif.gif");
            image2.setAttribute("src", "/images/spideygif.gif");
        }
    });
    main[0].addEventListener("mouseover", function () {
        image1.setAttribute("src", "/images/ekg.jpg");
        image2.setAttribute("src", "/images/ekg.jpg");
    });
})();

