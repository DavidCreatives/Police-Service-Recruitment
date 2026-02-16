// Create User constructor:
class userDatabase{
  constructor(){
    this.users = {};
  };
};

class userConstructor{
  constructor(username, password){
    this.username = username;
    this.password = password;
  }
}

const newUser = new userConstructor("David", "David1234")

const newDatabase = new userDatabase();
console.log(newDatabase.users);
console.log(newUser);
