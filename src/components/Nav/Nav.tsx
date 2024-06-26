'use client'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
    const isUserLogginIn = true;
    const [providers, setProviders] = useState(null)
    const [toggleDropDown, setToggleDropDown] = useState(false)

    useEffect(() => {
        const fetchProviders = async () => {
            const response = await getProviders();

            setProviders(response)
        }

        fetchProviders()
    }, [])

  return (
    <nav>
        <Link href='/'>
            <Image 
                src='/assets/images/logo.svg' 
                alt='image' 
                width={30} 
                height={30}
            />
            <p>Promptopia</p>
        </Link>

        {/* Desktop nav */}
        <div>
            {isUserLogginIn ? (
            <div>
                <Link href='/create-prompt'>
                    Create post
                </Link>

                <button type='button' onClick={signOut}>
                    Sing Out
                </button>
                
                <Link href='/profile'>
                    <Image 
                        src='/assets/images/logo.svg'
                        alt='profile'
                        width={37}
                        height={37}    
                    />
                </Link>
            </div>
            ) : (
            <>
                {providers && 
                    Object.values(providers).map((provider) => (
                        <button
                            type='button'
                            key={provider.name}
                            onClick={() => signIn(provider.id)}
                        >
                            Sign In
                        </button>
                    ))
                }
            </>
            )}
        </div>
        
        {/* Modile Navigation */}
        <div>
            {isUserLogginIn ? (
                <div>
                    <Image 
                        src='/assets/images/logo.svg'
                        alt='profile'
                        width={37}
                        height={37} 
                        onClick={() => setToggleDropDown(prev => !prev)}   
                    />

                    {
                        toggleDropDown && (
                            <div>
                                <Link
                                    href='/profile'
                                    onClick={() => setToggleDropDown(false)}
                                >
                                    My Profile
                                </Link>
                                <Link
                                    href='/create-prompt'
                                    onClick={() => setToggleDropDown(false)}
                                >
                                    Create Promtp
                                </Link>
                                <button 
                                type='button'
                                onClick={() => {
                                    setToggleDropDown(false)
                                    signOut()
                                }
                                }>
                                    Sign Out
                                </button>
                            </div>
                        )
                    }

                </div>
                ) : (
                    <>
                {providers && 
                    Object.values(providers).map((provider) => (
                        <button
                            type='button'
                            key={provider.name}
                            onClick={() => signIn(provider.id)}
                        >
                            Sign In
                        </button>
                    ))
                }
            </>
            )
            }
        </div>
    </nav>
  )
}

export default Nav