import { initFirebase } from './Firebase.config'
import * as firebase from 'firebase/app'
import "firebase/firestore";

initFirebase();

export const registerAdmin = (admin) => {
    db.collection('admins').add(admin)
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}


export const updateAdmin = (admin) => {
    firebase.firestore().collection('admins').doc(admin.id).set({
        id: admin.id
		name: admin.name
		course: admin.course
    })
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}


export const deleteAdmin = (adminId) => {
    firebase.firestore().collection('admins').doc(adminId).delete()
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}


export const readAdmin = (adminId) => {
    firebase.firestore().collection('admins').doc(adminId).get()
    .then((admin) => {
        if (admin.exists) {
            return admin
        } else {
            return null
        }
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}
