import Image from 'next/image'
// import snappmarketlogo from '../../../public/assets/images/snappmarket-logo.svg'
import Link from 'next/link';
import { getUsers } from '@/requests/getUsers';


export default async function ProductsDetails() {
  const users = await getUsers()

  return (

<main className=" flex flex-row gap-5 items-center justify-center p-5 h-screen">
    
    <ul>
            {users?.map((user) => (
                <li key={user.id}>
                    <Link href={`/users/${user.id}`}>{user.name}</Link>
                </li>
            ))}
        </ul>



       
      <p className=' flex flex-row gap-5 items-center justify-center p-5 bg-secondary rounded-lg shadow-md hover:shadow-md w-1/2 font-iransansb font-extrabold text-3xl text-white'>
       صفحه اولین  محصول    </p>

       
    
    </main>
  )
}