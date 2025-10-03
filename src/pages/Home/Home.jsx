import LiquidEther from '../../components/backgrounds/LiquidEther/LiquidEther';
import TextType from '../../components/effects/TextType';
import GlassSurface from '../../components/backgrounds/GlassSurface/GlassSurface';
import RoundButton from '../../components/Buttons/RoundButton/RoundButton';

import './Home.css';


export default function Home() {


    const liquidEtherDiv = 
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <LiquidEther
            colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={true}
            autoDemo={true}
            autoSpeed={0.3}
            autoIntensity={1}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
        />
    </div>

    const contentDiv = 
    <div className="home-content">
        <h1 className="home-title">Hi! I'm Aditi.</h1>
        <div className="home-subtitle">
            I like to keep my work <TextType
                text={['simple.', 'a lil quirky ;).', 'elegant.']}
                typingSpeed={75}
                deletingSpeed={50}
                pauseDuration={1000}
                className="home-subtitle-changing-text"
                cursorClassName="home-subtitle-cursor"
                cursorCharacter="|"
                showCursor={true}
                hideCursorWhileTyping={false}
                startOnVisible={true}
            />
        </div>
        {/* <div className="home-button">
            <GlassSurface
                width={'fit-content'}
                height={'3.125rem'}
                borderRadius={30}
                brightness={0.2}
                displace={0.5}
                className="glass-surface-home-button"
                style={{
                    'backgroundColor': 'rgba(255, 255, 255, 0.33)',
                    padding: '0 1.59375rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px px rgba(255, 255, 255, 0.1)',
                    border: '0.1px solid rgba(255, 255, 255, 0.3)',
                    position: 'absolute',
                    top: '70%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: 'white',
                    zIndex: 1,
                }}
            >
                <span className="home-button-text">View Work &gt; &gt;</span>
            </GlassSurface>
        </div> */}
    </div>

    const roundButtonDiv =
    <div className="home-round-button">
            <RoundButton onClick={() => alert('Round Button Clicked!')} />
    </div>


  return (
    <div className="home">
        {liquidEtherDiv}
        {contentDiv}
        {roundButtonDiv}
    </div>
    );
}