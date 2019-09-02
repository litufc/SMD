import { initFirebase } from './Firebase.config'
import * as firebase from 'firebase/app'
import "firebase/firestore";

initFirebase();

export const registerKey = (key) => {
    db.collection('keys').add(key)
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}


export const updateKey = (key) => {
    firebase.firestore().collection('keys').doc(key.id).set({
        id: key.id
        name: key.name
		place: key.place
		status: key.status

    })
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}


export const deleteKey = (keyId) => {
    firebase.firestore().collection('keys').doc(keyId).delete()
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}


export const readKey = (keyId) => {
    firebase.firestore().collection('keys').doc(keyId).get()
    .then((key) => {
        if (key.exists) {
            return key
        } else {
            return null
        }
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}
