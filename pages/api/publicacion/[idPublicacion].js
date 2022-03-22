import {doc, getDoc, getDocs,query, collection, where} from 'firebase/firestore'
import { database } from '../../../database'

export default async function getPublicacion(req, res){
    // console.log(req.query)
    const post = await getDoc(doc(database, "publicaciones", req.query.idPublicacion))

    const q = query(collection(database, "comentarios"), where("idPublicacion","==", req.query.idPublicacion))
    const docs= await getDocs(q)
    const comentarios=[]
    docs.forEach(doc=>{
        comentarios.push({...doc.data(),id: doc.id})
    })

    // console.log(post.data())
    const postOnly=post.data()

    // console.log(comentarios)
    return res.json({comentarios, postOnly})
}