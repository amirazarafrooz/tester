import Image from 'next/image'


export default async function Home() {
  return (

<main className=" flex flex-row gap-5 items-center justify-center p-5 h-screen">


       
      <p className=' flex flex-row gap-5 items-center justify-center p-5 bg-secondary rounded-lg shadow-md hover:shadow-md w-1/2 font-iransansb font-extrabold text-3xl text-white'>
       اسنپ مارکت </p>

       
    
    </main>
  )
}


// import Link from 'next/link'
// import {getUsers} from "@/requests/getUsers";


// export default async function Users() {
//     const users = await getUsers()

//     return (
//         <ul>
//             {users?.map((user) => (
//                 <li key={user.id}>
//                     <Link href={`/users/${user.id}`}>{user.name}</Link>
//                 </li>
//             ))}
//         </ul>
//     )
// }