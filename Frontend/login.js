login_url = "http://127.0.0.1:8000/token/login/";

const btn = document.querySelector("#login-submit");

btn.addEventListener("click", submitLogin);

async function submitLogin(e) {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  const credentials = { username, password };
  if (username === "" || password === "") {
    alert("Can't Accept Empty Fields!");
  } else {
    const res = await fetch(login_url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const resData = await res.json();
    console.log(resData.auth_token);
    localStorage.setItem("auth_token", resData.auth_token);
    window.location.href = "index.html";
  }
  e.preventDefault();
}
