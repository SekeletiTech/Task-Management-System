
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  //import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
  import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
  

    const firebaseConfig = {
    apiKey: "AIzaSyA6NmtW5szei6625CDAXQWFNN2KTqldlkw",
    authDomain: "task-managent-system.firebaseapp.com",
    projectId: "task-managent-system",
    storageBucket: "task-managent-system.appspot.com",
    messagingSenderId: "295335038489",
    appId: "1:295335038489:web:11ee82bef64dd3ec002488",
    measurementId: "G-6TZ6XKL0ZQ"
  };

  const auth= getAuth(firebaseApp);

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 // const analytics = getAnalytics(app);
const signUpbtn = document.getElementById("signUp");
const returnBtn = document.getElementById("return-btn");
const main = document.getElementById("main");
const createAcct = document.getElementById("create-acct");
signUpbtn.addEventListener("click", () => {
    main.style.display ="none";
    createAcct.style.display = "block";
});

returnBtn.addEventListener("click", () => {
    main.style.display = "block";
    createAcct.style.display ="none";
});
//sign in page
const emailInput=document.getElementById("email");
const passwordInput=document.getElementById("password");
const submitBtn=document.getElementById("submit");

// create account page 
const emailsignUp=document.getElementById("email-signup");
const passSignUp=document.getElementById("password-signup");
const emailsignUpcon=document.getElementById("confirm-email-signup");
const passSignUpcon=document.getElementById("confirm-password-signup");
const createAcctBtn=document.getElementById("create-acct-btn");




var email,
    password,
    signupEmail,
    signupPassword,
    confirmSignUpEmail,
    confirmSignUPPassword;

    createAcctBtn=addEventListener("click", ()=>{
        var isVerified = true;
        signupEmail=emailsignUp.value;
        confirmSignUpEmail=emailsignUpcon.value;
        if (signupEmail!=confirmSignUpEmail) {
            window.alert("Email fields don't match: Try Again ");
            isVerified=false;
        }

        signupPassword=passSignUp.value;
        confirmSignUPPassword=passSignUpcon;
        if ( signupPassword!=confirmSignUPPassword) {
           window.alert("Password fields dont match: try Again");
           isVerified=false; 
        }

        if (
            signupEmail==null||
            signupPassword==null||
            confirmSignUpEmail==null||
            confirmSignUPPassword==null
        ) {
           window.alert("Cannot Submit Empty Fields");
           isVerified=false; 
        }

        if (isVerified){
          createUserWithEmailAndPassword(Auth,signupEmail, signupPassword).then(
            ()=> {
                window.alert("Account Successfully Created");
                window.location="./CreateTask.html";
             }).catch((error) => {
              const errorCode = error.code;
                const errorMessage=error.message;
                window.alert(errorMessage);
             });
       
        }
       
    });

    submitBtn.addEventListener("click", ()=> {
        email = emailInput.value;
        password = passwordInput.value;

        signInWithEmailAndPassword(auth, email, password).then(
            () =>{
                window.alert("Login Successfull");
                window.location="./CreateTask.html";
            }).catch((error) => {
                const errorMessage=error.message;
                window.alert(errorMessage);
             });
    });




