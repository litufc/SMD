import { initFirebase } from './Firebase.config'
import * as firebase from 'firebase/app'
import "firebase/firestore";

initFirebase();

export const registerResource = (resource) => {
    db.collection('resources').add(resource)
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}


export const updateResource = (resource) => {
    firebase.firestore().collection('resources').doc(resource.id).set({
        id: resource.id
        name: resource.name
        place: resource.place		
		status: resource.status

    })
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}


export const deleteResource = (resourceId) => {
    firebase.firestore().collection('resources').doc(resourceId).delete()
    .then(() => {
        console.log('Deu Certo')
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}


export const readResource = (resourceId) => {
    firebase.firestore().collection('resources').doc(resourceId).get()
    .then((resource) => {
        if (resource.exists) {
            return resource
        } else {
            return null
        }
    })
    //Não deu certo
    .catch(() => {
        console.log('Deu Errado')
    });
}
