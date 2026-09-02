/* =========================================================
   ANJONA LADIES TAILORS
   STEP 1.3 — COMPLETE SCRIPT.JS
========================================================= */

"use strict";


/* =========================================================
   01. DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  initMobileMenu();
  initSmoothNavigation();
  initCurrentYear();
  initDeveloperConnect();
  initNoticeLinks();
  initScrollEffects();

});


/* =========================================================
   02. MOBILE NAVIGATION
========================================================= */

function initMobileMenu() {

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (!menuToggle || !mainNav) {
    return;
  }


  menuToggle.addEventListener("click", function () {

    const isOpen = mainNav.classList.toggle("active");

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    document.body.classList.toggle(
      "menu-open",
      isOpen
    );

  });


  /* Close menu when clicking a navigation link */

  const navLinks = mainNav.querySelectorAll("a");

  navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      closeMobileMenu();

    });

  });


  /* Close menu when clicking outside */

  document.addEventListener("click", function (event) {

    const clickedInsideMenu =
      mainNav.contains(event.target);

    const clickedToggle =
      menuToggle.contains(event.target);

    if (
      !clickedInsideMenu &&
      !clickedToggle &&
      mainNav.classList.contains("active")
    ) {

      closeMobileMenu();

    }

  });


  /* Close menu with Escape key */

  document.addEventListener("keydown", function (event) {

    if (
      event.key === "Escape" &&
      mainNav.classList.contains("active")
    ) {

      closeMobileMenu();

    }

  });


  function closeMobileMenu() {

    mainNav.classList.remove("active");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    document.body.classList.remove(
      "menu-open"
    );

  }

}


/* =========================================================
   03. SMOOTH NAVIGATION
========================================================= */

function initSmoothNavigation() {

  const links =
    document.querySelectorAll(
      'a[href^="#"]'
    );


  links.forEach(function (link) {

    link.addEventListener("click", function (event) {

      const targetId =
        link.getAttribute("href");

      if (
        !targetId ||
        targetId === "#"
      ) {
        return;
      }


      const target =
        document.querySelector(targetId);

      if (!target) {
        return;
      }


      event.preventDefault();


      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });


      /* Update URL without jumping */

      if (
        window.history &&
        window.history.pushState
      ) {

        window.history.pushState(
          null,
          "",
          targetId
        );

      }

    });

  });

}


/* =========================================================
   04. CURRENT YEAR
========================================================= */

function initCurrentYear() {

  const yearElement =
    document.getElementById(
      "currentYear"
    );

  if (!yearElement) {
    return;
  }

  yearElement.textContent =
    new Date().getFullYear();

}


/* =========================================================
   05. DEVELOPER CONNECT
========================================================= */

function initDeveloperConnect() {

  const developerButton =
    document.getElementById(
      "developerConnect"
    );

  if (!developerButton) {
    return;
  }


  developerButton.addEventListener(
    "click",
    function (event) {

      event.preventDefault();


      /*
        Temporary client-demo behaviour.

        Later, when the actual developer contact
        destination is decided, replace this with
        the final secure/contact URL.
      */

      const message =
        "Developer Connect খুব শীঘ্রই চালু হবে।";

      showTemporaryMessage(message);

    }
  );

}


/* =========================================================
   06. NOTICE LINKS
========================================================= */

function initNoticeLinks() {

  const noticeCard =
    document.querySelector(
      ".notice-card"
    );

  if (!noticeCard) {
    return;
  }


  noticeCard.addEventListener(
    "click",
    function () {

      /*
        External link is already defined in HTML.

        This handler intentionally does not
        redirect manually.
      */

      noticeCard.setAttribute(
        "aria-label",
        "মিলনমেলায় যান এবং উষা সম্পর্কে জানুন"
      );

    }
  );

}


/* =========================================================
   07. SCROLL EFFECTS
========================================================= */

function initScrollEffects() {

  const header =
    document.querySelector(
      ".site-header"
    );

  if (!header) {
    return;
  }


  let lastScrollY = window.scrollY;


  window.addEventListener(
    "scroll",
    function () {

      const currentScrollY =
        window.scrollY;


      if (currentScrollY > 20) {

        header.classList.add(
          "scrolled"
        );

      } else {

        header.classList.remove(
          "scrolled"
        );

      }


      lastScrollY =
        currentScrollY;

    },
    {
      passive: true
    }
  );

}


/* =========================================================
   08. TEMPORARY MESSAGE
========================================================= */

function showTemporaryMessage(message) {

  /*
    Remove an existing message first.
  */

  const existing =
    document.querySelector(
      ".anjo-temp-message"
    );

  if (existing) {
    existing.remove();
  }


  const messageBox =
    document.createElement(
      "div"
    );

  messageBox.className =
    "anjo-temp-message";


  messageBox.textContent =
    message;


  /*
    Inline styling keeps this temporary
    demo message independent from the
    main CSS system.
  */

  Object.assign(
    messageBox.style,
    {
      position: "fixed",
      left: "50%",
      bottom: "24px",
      transform:
        "translateX(-50%) translateY(20px)",
      zIndex: "9999",
      maxWidth: "calc(100% - 32px)",
      padding: "13px 20px",
      background: "#4d351f",
      color: "#ffffff",
      borderRadius: "999px",
      fontSize: "13px",
      fontWeight: "700",
      textAlign: "center",
      boxShadow:
        "0 15px 35px rgba(0,0,0,.18)",
      opacity: "0",
      transition:
        "opacity .3s ease, transform .3s ease"
    }
  );


  document.body.appendChild(
    messageBox
  );


  requestAnimationFrame(
    function () {

      messageBox.style.opacity = "1";

      messageBox.style.transform =
        "translateX(-50%) translateY(0)";

    }
  );


  setTimeout(
    function () {

      messageBox.style.opacity = "0";

      messageBox.style.transform =
        "translateX(-50%) translateY(20px)";


      setTimeout(
        function () {

          messageBox.remove();

        },
        350
      );

    },
    3000
  );

}


/* =========================================================
   09. IMAGE ERROR HANDLING
========================================================= */

document.addEventListener(
  "error",
  function (event) {

    const element =
      event.target;


    if (
      element &&
      element.tagName === "IMG"
    ) {

      element.classList.add(
        "image-load-error"
      );

    }

  },
  true
);


/* =========================================================
   10. WINDOW RESIZE SAFETY
========================================================= */

window.addEventListener(
  "resize",
  function () {

    /*
      If desktop width is restored while
      mobile menu is open, close it.
    */

    if (
      window.innerWidth > 800
    ) {

      const mainNav =
        document.getElementById(
          "mainNav"
        );

      const menuToggle =
        document.getElementById(
          "menuToggle"
        );


      if (mainNav) {
        mainNav.classList.remove(
          "active"
        );
      }


      if (menuToggle) {

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      }


      document.body.classList.remove(
        "menu-open"
      );

    }

  }
);


/* =========================================================
   11. EXTERNAL LINK SAFETY
========================================================= */

document.addEventListener(
  "click",
  function (event) {

    const link =
      event.target.closest(
        'a[target="_blank"]'
      );


    if (!link) {
      return;
    }


    /*
      Make sure external links opened
      in a new tab have safe relationship.
    */

    const currentRel =
      link.getAttribute("rel") || "";


    const relParts =
      currentRel
        .split(/\s+/)
        .filter(Boolean);


    if (!relParts.includes("noopener")) {

      relParts.push("noopener");

    }


    if (!relParts.includes("noreferrer")) {

      relParts.push("noreferrer");

    }


    link.setAttribute(
      "rel",
      relParts.join(" ")
    );

  }
);


/* =========================================================
   12. BASIC CONSOLE BRAND MESSAGE
========================================================= */

console.log(
  "Anjona Ladies Tailors — Website loaded successfully."
);
```
