import GlassSurface from '../backgrounds/GlassSurface/GlassSurface';
import './Navbar.css';

export default function Navbar() {

    return (
        <div className='navbar'>
            <GlassSurface 
                width={'75%'} 
                height={'2.5rem'}
                borderRadius={60}   
                displace={0.5}
                className="glass-surface-navbar-container"
                style={{
                    border: '1px solid rgba(255, 255, 255, 0.20)',
                    margin: 'auto',
                }}
            >
                <div className="navbar-content">
                        <div className='navbar-item-left'>
                            <ul>
                                <li className='navbar-item'><span className="navbar-text">Home</span></li>
                                <li className='navbar-item'><span className="navbar-text">My Work</span></li>
                            </ul>
                        </div>
                        <div className='navbar-item-right'>
                            <ul>
                                <li className='navbar-item'><span className="navbar-text">About Me</span></li>
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

