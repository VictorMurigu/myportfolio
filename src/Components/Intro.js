import { Link } from 'react-scroll';
import { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";


const Intro = () => {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },3000)
  },[])



    return (
      <section id="intro">
            <div className="introContent">
                <span className="hello">Hello, </span>
                <span className="introText">I'm
                    <span className="introName"> Victor</span><br />
                    <span className="introProfile">Website Designer</span>
                </span>
                <p className='introParagraph'>I am a skilled and passionate web designer<br /> with experience in creating visually appealing<br /> and user-friendly websites</p>
                
                <Link to="contacts" spy={true} smooth={true} offset={-80} duration={200}>
                    <button className='hire-Btn'>
                        Hire me   
                    </button>
                </Link>
                
                    
                
            </div>
     {loading ? <div>
        <PulseLoader sizeUnit={"px"} size={8} color={"#daa520"} loading={true} /></div> : <div><img src="./images/opt-portfolioimg2.jpeg" alt="profile" className="profileImg"/> </div>}   
      </section>
   
  )
}

export default Intro
