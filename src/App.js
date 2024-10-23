import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App" id ="#hme">
      <div className="Homebutton">
<a href="hme"><p>Home</p></a>
</div>
      <div className="Aboutbutton">
     <a href="#abt"><p>About</p></a>
      </div>
      <div className="Projectbutton">
      <a href="#prj"><p>Project</p></a>
      </div>
      <div className="Contactbutton">
      <a href="#cct"><p>Contact</p></a>
      </div>
      <header className="header">
        <h1>Hi, I’m Catherine</h1>
        <p>
          I am a passionate graphic and UI/UX designer, in creating impactful and user-centered designs.
          My expertise lies in web design,prototyping,and I thrive on turning complex problems into elegant solutions.
        </p>
        <img src="profile.jpg" alt="Catherine" className="profile-photo"/>
        <div className="container">
      <div className="location">
        <img src="location.png" alt="location"/>
        </div>
        <div className="locationtext">
        <h2>Compania Fundidor, Iloilo</h2>
        </div>
      </div>
      </header>

      <section className="about" id="abt">
        <h2>About Me</h2>
        <img src="profile.jpg" alt="Catherine" className="about-photo"/>
        <p>
        Hello! I’m Catherine, a dedicated and creative UI/UX designer and full-stack developer with a passion for transforming ideas into visually compelling, user-centered experiences. I specialize in web design, branding, and application development. I’m constantly inspired by the power of design to solve complex problems, and I aim to create intuitive, impactful solutions that truly resonate with users.

I enjoy staying up-to-date with the latest trends in design and technology, continuously expanding my skills to incorporate the best tools and practices in my work. Whether it's creating a seamless user interface, developing responsive web applications, or mentoring others, I’m driven by a commitment to excellence and innovation. Outside of work, I love exploring new tech, learning about emerging trends, and finding fresh inspiration for my projects.

        </p>
      </section>
      
<div className="projects" id="prj">
  <h1>Projects</h1>
  <div className= "project1">
    <img src ="project1.jpg" alt="project1"></img>
  </div>
  <div className= "proj2">
    <img src ="proj2.jpg" alt="proj2"></img>
  </div>
  <div className="mongodb">
<img src="mongodb.png" alt="mongodb"></img>
  </div>
  <div className="node">
  <img src="node.png" alt="node"></img>
  </div>
  <div className="react">
  <img src="REACT2.png" alt="REACT2"></img>
  </div>
  <div className="figma">
  <img src="Figma-01.png" alt="Figma"></img> 
  </div> 
  <div className="css">
  <img src="csspic.png" alt="css"></img> 
  </div>
  <div className="html">
  <img src="htmlpic.png" alt="html"></img> 
  </div>
</div>

      <footer className="contact" id="cct">
        <h2>Contact Me</h2>
        <p id="c1">
          What’s next? Feel free to reach out to me if you’re looking for
           a developer, have a query, or simply want to connect.
        </p>
        <div className="email">
        <img src="emailpic.png" alt="email"></img>
        </div>
        <p>Catherineevantalibutab@gmail.com</p>
        <div className="telephone">
        <img src="phone-icon.png" alt="phone"></img>
        </div>
        <p>+679457003327</p>
        <p id="c2">You may also find me on these platforms:</p>
        <div className="fb">
        <img src="fb.png" alt="fb"></img>
        </div>
        <div className="instagram">
        <img src="instagram.png" alt="instagram"></img>
        </div>
        <div className="twitter">
        <img src="twitter.png" alt="twitter"></img>
        </div>
        <div className="social-icons">
          {/* Repeat icons as above */}
        </div>
      </footer>
    </div>
  );
}

export default App;