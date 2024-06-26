import Nav from '@/components/Nav/Nav'
import React from 'react'

export const metadata = {
    title: "Promptopia",
    description: "Discover and Shadde AI Prompts"
}

const layout = ({children}) => {
  return (
    <html lang='ru'>
        <body>
            <div>
                <main>
                    <Nav/>
                    {children}
                </main>
            </div>
        </body>
    </html>
  )
}

export default layout