import { Box } from 'lucide-react'
import React from 'react'
import Button from './ui/Button';

const Navbar = () => {

    const isSignedIn = false;
    const username = "shivam"
    const handleAuthClick = (() => { })
    return (
        <header className='navbar'>
            <nav className='inner'>
                <div className="left">
                    <div className="brand">
                        <Box className='logo' />

                        <span className='name'>
                            Roomify
                        </span>
                    </div>

                    <ul className="links">
                        <a href="#">Product</a>
                        <a href="#">Pricing</a>
                        <a href="#">Community</a>
                        <a href="#">Enterprise</a>
                    </ul>
                </div>

                <div className="actions">
                    {isSignedIn ? (
                        <>
                            <span className='greeting'>
                                {username ? `Hi ${username}` : "Signed in"}
                            </span>
                            <Button size='sm' variant='ghost' className='btn' onClick={handleAuthClick}>
                                Log Out
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button size='sm' variant='ghost'
                                className='login' onClick={handleAuthClick}>
                                Log In
                            </Button>
                            <a href="#upload" className='cta'>Get Started</a>
                        </>
                    )}

                </div>
            </nav >
        </header >
    )
}

export default Navbar  