import { auth, signIn, signOut } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = async() => {
    const session = await auth();
  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
        <nav className='flex items-center justify-between'>
            <Link href="/">
            <Image src="data:image/png;base64,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" alt='logo' width={164} height={40}/>
            </Link>

            <div className='flex items-center gap-5 text-black'>

                {session && session.user  ? (
                    <>

                    <Link href="/project/create" >
                <span className='text-2 font-sans max-sm:hidden'>
                    Create
                </span>
                </Link>
                <form
                    action={async () =>{
                        "use server"
                        await signOut({redirectTo : "/"})
                    }}
                    >

                        <button type='submit' className='text-6 font-sans'>Logout</button>
                    </form>

                <Link href= {`/user/${session?.id}`}>
                {session.user?.name}
                </Link> 
                    </>
                ) : (
                    <form
                    action={async () =>{
                        "use server"
                        await signIn('github')
                    }}
                    >

                        <button type='submit' className='text-6 font-sans'>Login</button>
                    </form>
                ) }
                
            </div>
        </nav>
    </header>
  )
}

export default Navbar