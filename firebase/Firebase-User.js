import { initFirebase } from './Firebase.config'
import * as firebase from 'firebase/app'
import "firebase/firestore";

initFirebase();

export const registerUser = (user) => {
    db.collection('users').add(user)
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}


export const updateUser = (user) => {
    firebase.firestore().collection('users').doc(user.id).set({
        id: user.id
		name: user.name
		code: user.code
		course: user.course
		phone: user.phone
		email: user.email
		currentKeys: user.currentKeys
		currentResources: user.currentResources
    })
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}


export const deleteUser = (userId) => {
    firebase.firestore().collection('users').doc(userId).delete()
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}


export const readUser = (userId) => {
    firebase.firestore().collection('users').doc(userId).get()
    .then((user) => {
        if (user.exists) {
            return user
        } else {
            return null
        }
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}
