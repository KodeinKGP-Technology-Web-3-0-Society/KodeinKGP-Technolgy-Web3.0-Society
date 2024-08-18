import React, { useRef, useEffect, useState } from 'react'
// import { gsap, CSSPlugin } from 'gsap'
// import logo from './kik-final-logo.png'
// import { Bounce } from 'gsap/all';
// import { TypeAnimation } from 'react-type-animation';
import anime from './anime.gif'
import animeMob from './animeMob.gif'
import './anime.css'

const Animation = ({ animate, setAnimate }) => {
    // const KRef = useRef(null);
    // const ballRef = useRef(null);
    const wordRef = useRef(null);
    // const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

    // const [disappear, setDisappear] = useState(false)


    const [gifPlayed, setGifPlayed] = useState(false);
    const gifDuration = 1600;


    useEffect(() => {
        const timer = setTimeout(() => {
            setGifPlayed(true);
        }, gifDuration);

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    },);

    useEffect(() => {
        if (gifPlayed) {
            setAnimate(false)
        }
    }, [gifPlayed]);


    // useEffect(() => {
    //     // GSAP animation code
    //     gsap.to(KRef.current, {
    //         duration: 0.5,
    //         x: '18vw',
    //         repeat: 0,

    //     });

    //     gsap.to(ballRef.current, {
    //         y: '60vh',
    //         duration: 2,
    //         ease: "bounce.out",
    //         yoyo: true,
    //         repeat: 0,
    //         delay: 0.3
    //     });
    // }, []);

    // useEffect(() => {
    //     if (disappear) {
    //         gsap.to(wordRef.current, {
    //             duration: 2, // duration in seconds
    //             opacity: 0,
    //             ease: 'power1.out',
    //             onComplete: () => {
    //                 setAnimate(false)
    //             }
    //         });
    //     }
    // },
    //     [disappear])




    return (
        <div className='intro' ref={wordRef}>
            {/* <div
                ref={KRef}
                style={{
                    fontSize: '10rem',
                    position: 'absolute',
                    top: '50%',
                    left: '0%',
                    transform: 'translateY(-50%)',
                    color: "white",
                    fontWeight: "bold"
                }}
            >
                K
            </div>
            <div
                ref={ballRef}
                style={{
                    width: '100px',            // Increase size to fit logo
                    height: '100px',           // Increase size to fit logo
                    backgroundColor: 'transparent',
                    borderRadius: '50%',
                    position: 'absolute',
                    left: '31%',
                    top: '-10%',
                    transform: 'translate(-50%, -50%)',
                    overflow: 'hidden',       // Hide overflow to ensure logo stays within the ball
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                className='ball'
            >
                <img
                    src={logo}          // Path to your logo
                    alt="Logo"
                    style={{
                        width: '10rem',           // Adjust size of the logo
                        height: '7rem',
                    }}
                />
            </div>
            <div>
                <TypeAnimation
                    cursor={false}
                    className={CURSOR_CLASS_NAME}
                    sequence={['deinKGP',
                        (el) => el.classList.remove(CURSOR_CLASS_NAME),
                        1500,
                        () => { setslide(true) },
                        1000,
                        () => { setAnimate(false) }

                    ]}
                    speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
                    style={{
                        fontSize: '10rem', color: "white", fontWeight: "bold", position: 'absolute',
                        left: '36vw', top: "36vh"
                    }}
                    repeat={0}
                />
            </div> */}

            <div className='loading-gif'>
                {!gifPlayed &&
                    <img src={window.innerWidth < 768 ? animeMob : anime} alt="GIF" />
                }
            </div>
        </div>
    )
}

export default Animation