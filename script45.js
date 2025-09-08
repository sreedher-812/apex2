document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let message = document.getElementById("message").value.trim();
      let formMessage = document.getElementById("formMessage");

      if (name === "" || email === "" || message === "") {
        formMessage.textContent = "All fields are required!";
        formMessage.style.color = "red";
      } else if (!email.includes("@")) {
        formMessage.textContent = "Enter a valid email!";
        formMessage.style.color = "red";
      } else {
        formMessage.textContent = "Form submitted successfully!";
        formMessage.style.color = "green";
      }
    });
  }
});

function addTask() {
  let taskInput = document.getElementById("taskInput");
  if (!taskInput) return;

  let taskValue = taskInput.value.trim();
  if (taskValue === "") return;

  let li = document.createElement("li");
  li.textContent = taskValue;

  let removeBtn = document.createElement("button");
  removeBtn.textContent = "Delete";
  removeBtn.onclick = function() {
    li.remove();
  };

  li.appendChild(removeBtn);
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}
