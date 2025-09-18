document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header p");
  const hour = new Date().getHours();
  let greeting = "Welcome!";
  
  if (hour < 12) greeting = "Good Morning!";
  else if (hour < 18) greeting = "Good Afternoon!";
  else greeting = "Good Evening!";
  
  header.textContent = greeting + " I'm an aspiring [Job Title]";
});
