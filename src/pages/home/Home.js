
import RecipeList from '../../components/RecipeList'
import { projectFirestore } from '../../firebase/config'
import { useEffect, useState } from 'react'
// styles
import './Home.css'

export default function Home() {
 /// const { data, isPending, error } = useFetch('http://localhost:3000/recipes')
 const [data,setData]=useState(null)
 const  [isPending,setIsPending]= useState(false)
 const [error,setError]=useState(false)
   useEffect(() => {
      setIsPending(true)
      projectFirestore.collection('recipes').get().then((snapshot)=>
      {
          console.log(snapshot);
          if(snapshot.empty)
          {
            setError("NO RECIPES TO LOAD")
            setIsPending(false)
          }
          else
          {
            let results = []
            snapshot.docs.forEach(doc=>{
              results.push({id:doc.id,...doc.data()})
              console.log(doc)
            })
            console.log(results)
            results.map(item =>(
              console.log(item.data)
         //     console.log(item.id)
            ))
            setData(results)
            setIsPending(false)
          }
          
      }).catch(err=>{
        setError(err.message)
        setIsPending(false)
      })
   }, [])
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}

/*import { useState, useEffect } from 'react'
import { projectFirestore } from '../../firebase/config'
import RecipeList from '../../components/RecipeList'

// styles
import './Home.css'

export default function Home() {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)

    projectFirestore.collection('recipes').get().then(snapshot => {
      if (snapshot.empty) {
        setError('No recipes to load')
        setIsPending(false)
      } else {
        let results = []
        snapshot.docs.forEach(doc => {
          // console.log(doc)
          results.push({ ...doc.data(), id: doc.id })
        })
        setData(results)
        setIsPending(false)
        console.log(results)
      }
    }).catch(err => {
      setError(err.message)
      setIsPending(false)
    })

  }, [])

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}*/