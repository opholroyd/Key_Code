const event1 = document.getElementById("demo")
const event2 = document.getElementById("demo1")
const event3 = document.getElementById("demo2")
const event4 = document.getElementById("demo3")



document.addEventListener("keypress", () => {
   event1.innerHTML = event.which;
   event2.innerHTML = " " + event.code;
   event3.innerHTML = " " + event.which;
   event4.innerHTML = " " + event.key;
});
