import React from "react";
import { useState } from "react";
import "./ListsForOrganisationPage.css";

export const Lists = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");

  const imgFileHandler = (e) => {
    setImg(URL.createObjectURL(e.target.files[0]));
  };

  function newcard() {
    // return (
    //   <div>
    //     <div class="card">
    //       <img
    //         src="../images/Maharana-Pratap-aakhara.jpg"
    //         class="card-img-top"
    //         alt="..."
    //       />
    //       <div class="card-body">
    //         <h5 class="card-title">{title}</h5>
    //         <p class="card-text">{desc}</p>
    //       </div>
    //       <ul class="list-group list-group-flush">
    //         <li class="list-group-item">Website</li>
    //         {/* <li class="list-group-item">Facebook</li> */}
    //       </ul>
    //       <div class="card-body">
    //         <a
    //           href="https://www.facebook.com/pages/category/Athlete/Maharana-Pratap-Akhada-Faridabad-1392750557713300/"
    //           class="card-link"
    //         >
    //           Facebook
    //         </a>
    //         {/* <a href="#" class="card-link">Another link</a> */}
    //       </div>
    //     </div>
    //   </div>
    // );
  }

  return (
    <>
      <div class="card" id="featured-bar">
        <div class="card-body">Featured</div>
      </div>

      <div className="list-container">
        <div class="card">
          <img
            src="../images/Maharana-Pratap-aakhara.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Maharana Pratap Aakhara</h5>
            <p class="card-text">
              Located in Faridabad, Haryana. This Aakhara is known to have given
              India one of the best players in Kabaddi. The aakhara is run by
              senior coach Mr. Sundan Lal Pratap. He is strict in his guidance
              and discipline.{" "}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Website</li>
            {/* <li class="list-group-item">Facebook</li> */}
          </ul>
          <div class="card-body">
            <a
              href="https://www.facebook.com/pages/category/Athlete/Maharana-Pratap-Akhada-Faridabad-1392750557713300/"
              class="card-link"
            >
              Facebook
            </a>
            {/* <a href="#" class="card-link">Another link</a> */}
          </div>
        </div>

        <div class="card">
          <img
            src="../images/Jube Felix Hockey.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">
              Jude Felix Hockey Academy Charitable Trust
            </h5>
            <p class="card-text">
              The Jude Felix Hockey Academy (JFHA), CharitableTrust (Regd.), is
              a non-profit organization started in January 2009. Mr.Jude Felix
              is the founder of JFHA, an Arjuna Awardee, an Olympian, a Former
              Captain of the Indian National Hockey team, and the former Coach
              of the Indian team that won GOLD at the 2014 Asian Games. The Jude
              Felix Hockey Academy (JFHA), CharitableTrust (Regd.), is a
              non-profit organization started in January 2009 by Olympians,
              Former International and National players to cultivate the game of
              hockey amongst the underprivileged children of our country and to
              develop new talent for the game. Mr.Jude Felix is the founder of
              JFHA, an Arjuna Awardee, an Olympian, a Former Captain of the
              Indian National Hockey team, and the former Coach of the Indian
              team that won GOLD at the 2014 Asian Games. JFHA is a unique sport
              based NGO formed with the help of former hockey players,
              well-wishers and socially sensitive people.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <a href="https://jfha.in/">
              <li class="list-group-item">Website</li>
            </a>
            <a href="https://twitter.com/JFHA_Blore">
              <li class="list-group-item">Twitter</li>
            </a>
            <a href="https://jfha.in/programs.html">
              <li class="list-group-item">Programs</li>
            </a>
          </ul>
          <div class="card-body">
            <a
              href="https://www.facebook.com/JudeFelixHockeyAcademy/photos"
              class="card-link"
            >
              Facebook
            </a>
            <a href="https://jfha.in/achievements.html" class="card-link">
              Achievements
            </a>
          </div>
        </div>

        <div class="card">
          <img src="../images/AKFI.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">
              Amateur Kabaddi Fedration Of India (AKFI)
            </h5>
            <p class="card-text">
              Located in Bengaluru, Amateur Kabaddi Fedration of India is
              affiliated to International Kabaddi Federation, Asian Kabaddi
              Federation and Indian Olympic Association Recognized by Ministry
              of Youth Affairs & Sports Government of India. S.P Garg has been
              appointed as Administrator / President of Amateur Kabaddi
              Federation of India.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <a href="http://www.indiankabaddi.org/">
              <li class="list-group-item">Website</li>
            </a>
            <a href="http://www.indiankabaddi.org/about-us/members.html">
              <li class="list-group-item">Members</li>
            </a>
            {/* <a href="https://jfha.in/programs.html"><li class="list-group-item">Programs</li></a> */}
          </ul>
          <div class="card-body">
            {/* <a
              href="https://www.facebook.com/JudeFelixHockeyAcademy/photos"
              class="card-link"
            >
              Facebook
            </a> */}
            <a
              href="http://www.indiankabaddi.org/gallery/picture-gallery.html"
              class="card-link"
            >
              Gallery
            </a>
          </div>
        </div>

        <div class="card">
          <img
            src="../images/Indian Athletic academy.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Indian Athletic Academy</h5>
            <p class="card-text">
              Indian Athletic Academy a young, dynamic professional and fitness
              training academy initiated by record holders, former international
              athletes, national and international coaches in the famous
              Kanteerava Stadium and Kittur Rani Chennamma Stadium, the heart of
              Bangalore. Importantly, affiliated to Bangalore Urban District
              Athletics Association. Former international athletes like Captain
              C.Muralidharan and Roshan.S.M. are specialised in professional
              athletic and fitness training. Kishan and Pawan are our
              professional athletic trainers who had been athletes and have
              produced many young athletes in state and national levels.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <a href="https://indianathleticacademy.com">
              <li class="list-group-item">Website</li>
            </a>
            <a href="http://indianathleticacademy.com/training.html">
              <li class="list-group-item">Programs</li>
            </a>
            {/* <a href="https://jfha.in/programs.html"><li class="list-group-item">Programs</li></a> */}
          </ul>
          <div class="card-body">
            <a
              href="http://indianathleticacademy.com/gallery.html"
              class="card-link"
            >
              Gallery
            </a>
            <a
              href="http://indianathleticacademy.com/contact.html"
              class="card-link"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div>
        <div class="card">
          <img src={img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{desc}</p>
          </div>
          <ul class="list-group list-group-flush">
            {/* <li class="list-group-item">Website</li> */}
            {/* <li class="list-group-item">Facebook</li> */}
          </ul>
        </div>
      </div>

      <div className="form-for-input">
        <form>
          <label>Title: </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            value={title}
          />
          <label>Description:</label>
          <input
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            value={desc}
          />
          <label>Image:</label>
          <input type="file" onChange={imgFileHandler} />
          <br />

          <label>Aadhar number of Organisation Chairperson: </label>
          <input onChange={(e) => setTitle(e.target.value)} type="text" />
          <div className="bottom">
            <button className="bottom-button">Register</button>
          </div>
        </form>
      </div>

      {/*
      We have to watch the codeninja controlled input video and gooo*/}
    </>
  );
};
