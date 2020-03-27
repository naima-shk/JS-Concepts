{
  /*Benefits of Composition
Because the concept of composition is such a large part of what makes React awesome and incredible to work with, let's dig into it a little bit. Remember that composition is just combining simple functions together to create complex functions. There are a couple of key ingredients here that we don't want to lose track of. These ingredients are:
simple functions
combined to create another function
Composition is built from simple functions. Let's look at an example */
}
function getProfileLink(username) {
  return "https://github.com/" + username;
}

{
  /* This function is ridiculously simple, isn't it? It's just one line! Similarly, the getProfilePic function is also just a single line:
   */
}
function getProfilePic(username) {
  return "https://github.com/" + username + ".png?size=200";
}
{
  /* 
    These are definitely simple functions, so to compose them, we'd just combine them together inside another function:
Now we could have written getProfileData without composition by providing the data directly:
*/
}

function getProfileData(username) {
  return {
    pic: "https://github.com/" + username + ".png?size=200",
    link: "https://github.com/" + username
  };
}
