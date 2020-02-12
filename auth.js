//listen for auth status changes
auth.onAuthStateChanged(user => {
    console.log(user)
    if (user){
        setupUI(user);
        console.log('user logged in: ', user);
    }else{
        setupUI();
        console.log('user logged out');
    }
})

//logout method
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut()
});



//login method
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        //close modal and reset form
        const modal = document.querySelector('#modal-login');
        loginForm.reset();
        
    });

})

//need to clear modal on close and alert id wrong email
