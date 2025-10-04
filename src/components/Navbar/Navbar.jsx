import GlassSurface from '../backgrounds/GlassSurface/GlassSurface';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import './Navbar.css';

// Custom duration function based on scroll distance
const getScrollDuration = (targetElement) => {
    if (!targetElement) return 2000; // Default duration
    
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const currentPosition = window.pageYOffset;
    const distance = Math.abs(targetPosition - currentPosition);
    
    // Calculate duration based on distance (min 500ms, max 2000ms)
    const baseDuration = 1500;
    const maxDuration = 4000;
    const duration = Math.min(maxDuration, baseDuration + (distance / 3));
    
    return Math.round(duration);
};

export default function Navbar() {
    const [isInMentorSection, setIsInMentorSection] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const mentorSection = document.getElementById('mentor-work');
            if (mentorSection) {
                const rect = mentorSection.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                
                // Check if mentor section covers most of the screen (more than 60% visible)
                const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
                const visibilityRatio = visibleHeight / viewportHeight;
                
                setIsInMentorSection(visibilityRatio > 0.999);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial state

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='navbar'>
            <GlassSurface 
                width={'60%'} 
                height={'2.5rem'}
                brightness={0.9}
                // blur={'20px'}
                backgroundOpacity={0}
                opacity={0.1}
                saturation={0.7}
                borderRadius={20}   
                displace={0.1}
                className={`glass-surface-navbar-container ${isInMentorSection ? 'dark-mode' : ''}`}
                style={{
                    // border: '1px solid rgba(255, 255, 255, 0.20)',
                    margin: 'auto',
                    backgroundColor: isInMentorSection ? 'rgba(255, 255, 255, 0)' : 'rgba(0, 0, 0, 0)',
                    backdropFilter: 'blur(10px)',
                    border: isInMentorSection ? '1px solid rgba(0, 0, 0, 0.20)' : '1px solid rgba(255, 255, 255, 0.20)',
                }}
            >
                <div className="navbar-content">
                        <div className='navbar-item-left'>
                            <ul>
                                <li className='navbar-item'>
                                    <Link 
                                        to="home" 
                                        smooth={true} 
                                        duration={() => getScrollDuration(document.getElementById('home'))} 
                                        offset={-70}
                                        spy={true}
                                        activeClass="active"
                                        className={`navbar-text ${isInMentorSection ? 'dark-text' : ''}`}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className='navbar-item'>
                                    <Link 
                                        to="my-work" 
                                        smooth={true} 
                                        duration={() => getScrollDuration(document.getElementById('my-work'))} 
                                        offset={100}
                                        spy={true}
                                        activeClass="active"
                                        className={`navbar-text ${isInMentorSection ? 'dark-text' : ''}`}
                                    >
                                        My Work
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='navbar-item-right'>
                            <ul>
                                <li className='navbar-item'><span className={`navbar-text ${isInMentorSection ? 'dark-text' : ''}`}>About Me</span></li>
                                <li className='navbar-item'
                                    style={{
                                        paddingRight: '0',
                                        paddingLeft: '0',
                                        marginRight: '0',
                                        marginLeft: '0'
                                    }}
                                >
                                    {/* <GlassSurface
                                        width={'fit-content'}
                                        height={'3.125rem'}
                                        borderRadius={30}
                                        brightness={0.2}
                                        displace={0.5}
                                        className="glass-surface-resume-button"
                                        style={{
                                            'backgroundColor': 'rgba(255, 255, 255, 0.33)',
                                        }}
                                    > */}
                                    <div className='navbar-item-resume-button'>
                                        <span className="navbar-text">Resume</span>
                                    </div>
                                    {/* </GlassSurface> */}
                                </li>
                            </ul>
                        </div>
                </div>
            </GlassSurface>
        </div>
    );
}

