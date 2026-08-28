// ================================
// ANJONA LADIES TAILORS
// script.js
// ================================


// MOBILE MENU
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", function () {

        mobileMenu.classList.toggle("show");

        if (mobileMenu.classList.contains("show")) {
            menuButton.textContent = "✕";
        } else {
            menuButton.textContent = "☰";
        }

    });


    // Close menu after clicking a link
    const mobileLinks =
        mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.classList.remove("show");
            menuButton.textContent = "☰";

        });

    });


    // Escape key closes menu
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            mobileMenu.classList.remove("show");
            menuButton.textContent = "☰";

        }

    });

}



// ================================
// ORDER FORM
// ================================

const orderForm =
    document.getElementById("orderForm");


if (orderForm) {

    orderForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document
            .getElementById("customerName")
            .value
            .trim();


        const phone =
            document
            .getElementById("customerPhone")
            .value
            .trim();


        const service =
            document
            .getElementById("serviceName")
            .value;


        const date =
            document
            .getElementById("deliveryDate")
            .value;


        const details =
            document
            .getElementById("orderDetails")
            .value
            .trim();



        // ================================
        // VALIDATION
        // ================================

        if (!name) {

            alert("Please enter your name.");

            document
            .getElementById("customerName")
            .focus();

            return;
        }


        if (!phone) {

            alert("Please enter your phone number.");

            document
            .getElementById("customerPhone")
            .focus();

            return;
        }


        if (!service) {

            alert("Please select a service.");

            document
            .getElementById("serviceName")
            .focus();

            return;
        }



        // ================================
        // BUSINESS WHATSAPP NUMBER
        // ================================

        const businessNumber =
            "8801717503093";



        // ================================
        // WHATSAPP MESSAGE
        // ================================

        let message =
`Hello Anjona Ladies Tailors! 🧵

I would like to place an order.

👤 Name: ${name}

📱 Phone: ${phone}

✂️ Service: ${service}`;


        if (date) {

            message +=
`\n\n📅 Required Date: ${date}`;

        }


        if (details) {

            message +=
`\n\n📝 Design / Details:
${details}`;

        }


        message +=
`\n\nThank you ❤️`;



        // ================================
        // OPEN WHATSAPP
        // ================================

        const whatsappURL =
            "https://wa.me/" +
            businessNumber +
            "?text=" +
            encodeURIComponent(message);


        window.open(
            whatsappURL,
            "_blank"
        );

    });

}



// ================================
// CURRENT YEAR
// ================================

const yearElement =
    document.querySelector("footer span");


if (yearElement) {

    yearElement.textContent =
        "© " +
        new Date().getFullYear() +
        " Anjona Ladies Tailors";

}
