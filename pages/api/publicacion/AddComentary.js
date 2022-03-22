
import{collection, addDoc} from 'firebase/firestore'
import { database } from '../../../database'

export default async function create(req, res){

    const doc = await addDoc(collection(database, "comentarios"),
        
            req.body
    )
    
    return res.json({menssage:"Agregado"})
}