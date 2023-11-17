import React, { useState } from 'react'
import Image from '../components/Image/2.jpg'
import ReactPlayer from 'react-player'
const Body = (props) => {
    const [likes, setLikes] = useState(0) // likes=15
    function count() {
        setLikes(likes + 1);  //(15+1)
    }
    const [text, setText] = useState('')
    function reset() {
        setText('')
    }
    return (
        <div>
            <div style={{ paddingTop: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <img src={Image} alt="images" style={{ height: '800px', width: '1200px'}}/> <br />
                <p>Blessed are the Peacemakers </p>
                <p>likes: {likes}</p>
                
                {/* destructuring */}
                <button onClick={count}>Like</button>
            </div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <label htmlFor="Name">Name : </label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <p>onutput : {text}</p>
                <button onClick={reset}>Reset</button>
                <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                 <button onClick={props.fun}> click me</button>
            </div>
            </div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                {/* pass down url link in url attribuite */}
                <ReactPlayer url={'https://youtu.be/OJAvgHSeIhI?feature=shared'} height={400}  controls />
                <div>
                    <p>Kimi no wa aka Your Name </p>

                </div>
            </div>
        </div>
    )
}
export default Body