function login() {
  x = document.getElementById("email").value;
  y = document.getElementById("password").value;

  if (x == "abcde" && y == "1234") {
    alert("login berhasil");
  } else {
    alert("login gagal..!!");
  }
}
