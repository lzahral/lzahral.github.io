
function openLightbox(image) {

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeLightbox() {

    const lightbox = document.getElementById("lightbox");

    lightbox.classList.remove("active");

    document.body.style.overflow = "";
}


document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeLightbox();
    }

});


    const sidebarLinks = document.querySelectorAll(
        ".detail-sidebar > a[href^='#']"
    );

    const sections = document.querySelectorAll(
        ".detail-content > section[id]"
    );


    // کلیک روی لینک‌ها
    sidebarLinks.forEach(link => {

        link.addEventListener("click", function () {

            sidebarLinks.forEach(item => {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });


    // فعال شدن لینک بر اساس اسکرول
    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop - 200 &&
                window.scrollY < sectionTop + sectionHeight - 200
            ) {
                currentSection = section.getAttribute("id");
            }

        });


        if (currentSection) {

            sidebarLinks.forEach(link => {

                link.classList.remove("active");

                if (
                    link.getAttribute("href") === "#" + currentSection
                ) {
                    link.classList.add("active");
                }

            });

        }

    });
