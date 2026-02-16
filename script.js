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
};
// DOM SignUp PAGE
const nameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')
const passwordConfirmInput = document.getElementById('confirmPassword')
const availableMessage = document.getElementById('available?')
// DOM Login PAGE
const usernameLogin = document.getElementById("usernameLogin")
const passwordLogin = document.getElementById("passwordLogin")

// Username validation within the system as the user types/in live time.
document.getElementById("username").addEventListener("input", function(){
  const nameVal = nameInput.value;

  if(nameVal.length < 3 || nameVal.length > 18){
    availableMessage.innerHTML = `<p style="color: red; font-size: 18px;text-align: left; margin:0px">⭕ Username character length should be 3 to 18 characters</p>`
    return;
  }else{
    availableMessage.innerHTML = ''
    if(nameVal){
      const nameCheck = localStorage.getItem(nameVal)
      if(nameCheck){
        availableMessage.innerHTML = `<p style="color: red; font-size: 18px;text-align: left; margin:0px">⭕ Username already exists. Enter another one</p>`
      }else{
        availableMessage.innerHTML =`<p style="color: green; font-size: 18px;text-align: left; margin:0px">✅Username available</p>`
        }
      }
    }
})

// Carries out validation and data entry after use has called the function(inthis case bys use of the Submit button)
function handleSignUp(){
  const nameVal = nameInput.value;
  const passwordValue = passwordInput.value;
  const passwordConfirmValue = passwordConfirmInput.value;

  if(nameVal.length < 3 || nameVal.length > 18){
    alert('Username character length should be 3 to 18 characters')
    return;
  }
  if(nameVal){
    const nameCheck = localStorage.getItem(nameVal)
    if(nameCheck){
      alert("⭕ Username already exists. Enter another one")
    }else
      {if(passwordValue === passwordConfirmValue){
        const newUSer = new userConstructor(nameVal, passwordValue)
        localStorage.setItem(newUSer.username, newUSer.password)

        
      }else{
        alert('Ensure the password and password confirmation are the same')

      }
    }
  }
  nameVal = ''
  passwordValue.value = ''
  passwordConfirmValue.value = ''
  
  // console.log(nameVal, passwordValue, passwordConfirmValue)
};

// Handling Login on user entry of data
function handleLogin(){
  const usernameLoginVal = usernameLogin.value
  const passwordLoginVal = passwordLogin.value

  const localPassReq = localStorage.getItem(usernameLoginVal)
  if(passwordLoginVal === localPassReq){
    // console.log('Successful')
    // console.log(localPassReq)
    window.open('./about.html', '_self')
  }else{
    alert("Enter correct username or password")
  }
}

  

// const newDatabase = new userDatabase();
// console.log(newDatabase.users);
// console.log(newUser);
