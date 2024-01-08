// import { Link } from 'react-scroll';
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Works = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },8000)
  },[])
  return (
      <section id="works">
          <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">I take pride in creating reliable and user-friendly software</span>
      {loading && <div>Loading images...</div>}
      {loading ? <div>
        <ClipLoader
        color={"#daa520"}
        loading={loading}
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div> : 
      <div className="worksImgs">
        <a href="https://touring.netlify.app/" target='_blank' rel="noreferrer"><img className="worksImg" src="./images/tours3.jpg" alt="" /></a>
        <a href="https://pomodoro-clock-session.netlify.app/" target='_blank' rel="noreferrer"><img className="worksImg" src="./images/clock.jpg" alt="" /></a>
        <a href="https://drummachine01.netlify.app/" target='_blank' rel="noreferrer"><img className="worksImg" src="./images/drummachine.jpg" alt=""/></a>
        <a href="https://mycalculator-app001.netlify.app/" target='_blank' rel="noreferrer"><img className="worksImg" src="./images/calculator.png" alt=""/></a>        
      </div>
      
      }
      <button className="worksBtn">
        <a className='worksBtnLink' href="https://github.com/VictorMurigu" target='_blank' rel="noreferrer">See More</a>
      </button>
      

    </section>
  )
}

export default Works