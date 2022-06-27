import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

const GET_LESSON_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSON_QUERY)
  console.log(data);

  // useEffect(() => {
  //   client.query({
  //     query: GET_LESSON_QUERY,
  //   }).then(response => {
  //     console.log(response.data)
  //   })
  // }, [])

interface Lesson {
  id: string;
  title: string;
}

  return (
   <ul>
     {data?.lessons.map(lesson => {
       return <li key={lesson.id}>{lesson.title}</li>
     })}
   </ul>
  )
}

export default App
