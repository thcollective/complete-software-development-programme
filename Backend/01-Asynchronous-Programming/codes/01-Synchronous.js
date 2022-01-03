console.log("Start");
function getUser() {
  let i = 0;
  while (i < 1000000000) {
    i++;
  }

  const data = {
    name: "User 1",
    id: 1,
  };

  return data;
}

const user = getUser();
console.log(user);
console.log("End");
