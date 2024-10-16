import { collection, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase/config"


export const useCollection = (c) =>{
    const [collectionData , setCollectionData] = useState(null)

    useEffect(() => {
        let ref = collection(db , c)
        const unsub = onSnapshot( ref , (snapshot) => {
            let result = []
            snapshot.docs.forEach(doc => {
                result.push({id: doc.id , ...doc.data()})
            })
        setCollectionData(result)
        })
        return () => unsub()
    },[c])

    return {collectionData}

}