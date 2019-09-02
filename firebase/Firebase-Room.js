import { initFirebase } from './Firebase.config'
import * as firebase from 'firebase/app'
import "firebase/firestore";

initFirebase();

export const registerRoom = (room) => {
    db.collection('rooms').add(room)
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}


export const updateRoom = (room) => {
    firebase.firestore().collection('rooms').doc(room.id).set({
        id: room.id
		name: room.name
		status: room.status
    })
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}


export const deleteRoom = (roomId) => {
    firebase.firestore().collection('rooms').doc(roomId).delete()
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}


export const readRoom = (roomId) => {
    firebase.firestore().collection('rooms').doc(roomId).get()
    .then((room) => {
        if (room.exists) {
            return room
        } else {
            return null
        }
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}
