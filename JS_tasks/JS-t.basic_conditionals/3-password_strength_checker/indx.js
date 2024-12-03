function passcheck(password) {
   if (password.length >= 8 && /\d/.test(password)) {
       console.log("Strong password");
   } else if (password.length >= 8) {
       console.log("Moderate password");
   } else {
       console.log("Weak password");
   }
}

passcheck("password123");