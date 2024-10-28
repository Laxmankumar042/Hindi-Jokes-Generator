const btn = document.querySelector("button");
const para = document.querySelector("p");
const apiUrl =
  "https://hindi-jokes-api.onrender.com/jokes?api_key=0d7464c46aa08c8e520d452ba0b3";

async function jokeGenerator() {
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    para.innerText = data.jokeContent;
  } catch (error) {
    para.innerText = "Failed to fetch data";
    console.log(error);
  }
}
jokeGenerator();
btn.addEventListener("click", () => jokeGenerator());
