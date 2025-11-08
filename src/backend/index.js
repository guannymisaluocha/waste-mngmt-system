console.log("Hello World!")

let toggle = false;

function changeText() {
	toggle = !toggle;
  if (toggle === true) {
      document.getElementById("demo").innerHTML = "Hello JavaScript!"
  } else {
      document.getElementById("demo").innerHTML = "JavaScript can change HTML content."
  }
}