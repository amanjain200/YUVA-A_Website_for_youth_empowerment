console.log("Im in collabs.js");

const collabBtn = document.querySelectorAll("#collab-join-btn");
const campusBtn = document.querySelectorAll("#campus-join-btn");

collabBtn[0].addEventListener("click", () => {
  console.log("I am in collabBtn");
  window.open(
    "https://www.facebook.com",
    "Join our Creator-collab Program",
    "width=620,height=490,status=yes,resizable=yes, left=290, top=100"
  );
});

campusBtn[0].addEventListener("click", () => {
  console.log("I am in campusBtn");
  window.open(
    "https://forms.gle/7X7g7zjxYQK1qJ7b9",
    "Join our Campus ambassador Program",
    "width=620,height=490,status=yes,resizable=yes, left=290, top=100"
  );
});
