import {doc, getDoc, getDocs,query, collection, where} from 'firebase/firestore'
import { database } from '../../../../database'

export default async function getCategoria(req, res){
    // console.log(req.query.idCategoria)

    const q= query(collection(database, "publicaciones"), where("category", "==", req.query.idCategoria))
   
    const docs = await getDocs(q)
    const categoria= []

    docs.forEach(doc=>{
        categoria.push({...doc.data(), id: doc.id})
    })

    return res.json(categoria)
}