
var database = [
       {
        username: "shubh",
        password: "hello"
       },
       {
        username: "aman",
        password: "69"
       },
       {
        username: "hima",
        password: "420"
       }
	]

var newsFeed = [
        {
           username: "himanshu",
           timeline: "python is op"
        },
        {
           username: "shubham",
           timeline: "javascipt is op"
        },
        {
           username: "aman",
           timeline: "blockchain is op"
        }
	]

var userNamePrompt = prompt("what's your username");
var passwordPrompt = prompt("what's your Password");

function valid(user, pass) {
for (var i=0; i < database.length; i++) {
   if (database[i].username === user && database[i].password === pass) {
      return true;
   }
}
return false;
}

function signin(user, pass) {
if (valid(user, pass)) {
      window.location.href="https://shubham-568.github.io/ani-max-568.github.io/";
   } else {
      alert("sorry wrong usernmae or password");
   }
}

signin(userNamePrompt, passwordPrompt);