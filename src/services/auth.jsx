import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import { Toast } from "react-native-toast-message";


export const login = (email, password) => {
        return auth()
        .signInWithEmailAndPassword(email, password).then((userCredetial) => {
          Toast.show({type:"success", text2:"You're now logged in!"})
          const user = userCredetial.user;
            navigation.navigate('Home', {user: user.uid});
        }).catch((error) => {
          if(error.code === "auth/user-not-found"){
            Toast.show({type:'error', text2:"Email is not registered"});
          } if (error.code === "auth/wrong-password") {
            Toast.show({type:'error', text2:"Password is incorrect"});
          } else {
            console.log(error)
          }
        });  
}

export const signin = (email, password)  => {
    auth()
    .createUserWithEmailAndPassword(email, password).then((userCredetial) => {
       Toast.show({type:"success", text2:"Email is successfully registered!"})
      const user = userCredetial.user.email;
        navigation.navigate("Signin", {user: user})
    }).catch((error) => {
      if(error.code === "auth/email-already-in-use"){
        Toast.show({type:'error', text2:"email address is already in use!"});
      } 
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }else {
        console.log(error)
      }
    });  
}

