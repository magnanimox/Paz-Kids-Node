// Universal Shortcuts
const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

// Menu > Assista; Prevent Default
c(".menu .dropdown a").addEventListener("click", function (event) {
    event.preventDefault();
});

c(".week-menos").addEventListener("click", function (event) {
    event.preventDefault();
});

c(".week-mais").addEventListener("click", function (event) {
    event.preventDefault();
});
