
const Skills = () => {
  return (
      <section id="skills">
          <span className="skillTitle">What I do</span>
          <span className="skillDesc">I am a skilled and passionate web developer with experience in creating visually appealing and user-friendly websites.I am also an enthusiast for technology.I am fascinated by the creativity that comes along solving problems by code.</span>
          <div className="skillBars">
              <div className="skillBar">
                  <img className="skillBarImg" alt="" src="./images/websitedesign2.jpg" />
                  <div className="skillBarText">
                      <h2>Website Design</h2>
                      <p>   With the goal of delivering an engaging and seamless online experience,I create websites that are not only visually pleasing but also intuitive and efficient</p>
                  </div>
              </div>
              <div className="skillBar">
                  <img className="skillBarImg" alt="" src="./images/mobileappdesign1.jpg" />
                  <div className="skillBarText">
                      <h2>Mobile App Design</h2>
                      <p> Mobile applications cater to diverse needs, offering a user-friendly and accessible way to manage, connect, and enrich various aspects of your life. </p>
                  </div>
              </div>
              <div className="skillBar">
                  <img className="skillBarImg" alt="" src="./images/ui1.jpg" />
                  <div className="skillBarText">
                      <h2>UI/UX Design</h2>
                      <p>I focus on the visual elements, ensuring a visually appealing and intuitive interface, while  emphasizing the overall user experience, aiming to make interactions seamless and enjoyable</p>
                  </div>
              </div>
              
          </div>
    </section>
  )
}

export default Skills