import React from 'react'
import YellowBubble from '../images/Yellow Bubble.png'
import Illustration from '../images/Illustration.png'

const right = () => {
    return (
        <div>
            {/* <img src={YellowBubble} style={{height:'570px'}}></img> */}
            {/* <foreignObject x="0" y="-50" height="100%" width="100%"> */}
            {/* <img src={Illustration} style={{transform:'scale(0.6)'}}></img> */}
            <svg viewBox="0 0 894 970" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="562" cy="408" r="562" fill="#FFE999"/><br/><br/>
            <foreignObject x='500' y='100' height="100%" width="100%">
                <button style={{background: '#F7D832', border:'none', borderRadius: '5px',height:'60px',width:'180px',fontSize:'1.5rem'}} onClick={sayHello} type="submit">Test</button>
            </foreignObject>
            <foreignObject x='0' y='200' height="100%" width="100%">
            <img src={Illustration} style={{transform:'scale(0.9)'}}></img>
            </foreignObject>
            </svg>
            {/* </foreignObject> */}
        </div>
    )
}

function sayHello() {
    alert('You clicked me!');
  }

export default right
