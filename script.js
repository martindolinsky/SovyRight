async function getName(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {});
  const myJson = await response.json(); // parses JSON response into native JavaScript objects
  console.log(myJson.name);
  document.getElementById("content").innerHTML = myJson.name;
}

getName("https://swapi.co/api/people/1/");
