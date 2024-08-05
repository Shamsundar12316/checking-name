// part 27 // question 32

// checking username 

 let current_users: string[] = ["Sham","Ahmed",'Zafar ali',"sooraj",'kiran'];

let new_users: string[] = ["jairam","Sham","Ali","ravi","sooraj"];

new_users.forEach(new_username => {
let lowercase: string = new_username.toLowerCase();

if(current_users.map(c_user => c_user.toLowerCase()).includes(lowercase)){
    console.log(`The username ${new_username} is not available. please write a different username`);
}
else{
    console.log(`The username ${new_username} is available`);

    
}

})

