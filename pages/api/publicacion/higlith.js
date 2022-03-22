import {collection,getDocs,where,query} from 'firebase/firestore'
import { database } from '../../../database'


export default async function listHiligth(req,res){
    const q = query(collection(database,"publicaciones"),where("highlight","==",true))
    const docs = await getDocs(q)
    const highlights = []

    docs.forEach(doc=>{
        highlights.push({...doc.data(), id:doc.id})
    })
    
    

    return res.json(highlights)
}