import React from "react";
import "./Services.css";
import website from "../Assets/Photos/Services/data.png";

const Card = ({ title, first, second, third, fourth, fiveth, sixth, button }) => (
  <div className="card">
    <div className="content">
      <h2 className="title">{title}</h2>
      <p className="first">{first}</p>
      <p className="second">{second}</p>
      <p className="third">{third}</p>
      <p className="fourth">{fourth}</p>
      <p className="fiveth">{fiveth}</p>
      <p className="sixth">{sixth}</p>
      <button className="btn">{button}</button>
    </div>
  </div>
);

const Services = () => {
  const cards = [
    {
      title: "Website",
      first: "website",
      second: "Eccomerce",
      third: "Blog",
      fourth: "Forum",
      fiveth: "E-Learning",
      sixth: "LiveChat",
    },
    {
        title: "Sales",
        first: "website",
        second: "Eccomerce",
        third: "Blog",
        fourth: "Forum",
        fiveth: "E-Learning",
        sixth: "",
      },
    // { title: 'To The Beach', copy: 'Plan your next beach trip with these fabulous destinations', button: 'View Trips' },
    // { title: 'Desert Destinations', copy: 'It\'s the desert you\'ve always dreamed of', button: 'Book Now' },
    // { title: 'Explore The Galaxy', copy: 'Seriously, straight up, just blast off into outer space today', button: 'Book Now' }
  ];
  return (
    <div>
      <section id="services">
        <div className="services-content">
          <h2>Our Services</h2>
          <p className="services-description">
            Our seasoned technical and project management team will guide you from a business idea to the implementation
            of a cost-effective software solution. We deliver valuable business tools specially designed to serve the
            specific needs of your business.
          </p>
          <div className="card-section">
            {/* Card 1 */}
            <div className="card">
              <div className="content">
                <img />
                <h2 className="title">Mountain View</h2>
                {/* <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p> */}
                {/* <button className="btn">View Trips</button> */}
              </div>
            </div>

            {/* Card 2 */}
            {/* <div className="card">
              <div className="content" >
               
                <h2 className="title">To The Beach</h2>
                <p className="copy">Plan your next beach trip with these fabulous destinations</p>
                <button className="btn">View Trips</button>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section className="section-2">
        <div className="heading">
          <h1>Image Card Hover Effect #02</h1>
        </div>
        <figure className="figure">
          <img
            src="https://images.pexels.com/photos/1510610/pexels-photo-1510610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Tokyo"
          />
          <figcaption>
            <h3 className="title">Tokyo</h3>
            <h3 className="hover">Read More</h3>
          </figcaption>
          <a href="#"></a>
        </figure>
        <figure className="figure">
          <img
            src="https://images.pexels.com/photos/1738994/pexels-photo-1738994.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="Hong Kong"
          />
          <figcaption>
            <h3 className="title">Hong Kong</h3>
            <h3 className="hover">Read More</h3>
          </figcaption>
          <a href="#"></a>
        </figure>
        <figure className="figure">
          <img
            src="https://images.pexels.com/photos/3031750/pexels-photo-3031750.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Seoul"
          />
          <figcaption>
            <h3 className="title">Seoul</h3>
            <h3 className="hover">Read More</h3>
          </figcaption>
          <a href="#"></a>
        </figure>
      </section>

      <section className="section-4">
        <div className="heading">
          <h1>Image Card Hover Effect #04</h1>
        </div>
        <div className="row">
          {/* <figure className="figure">
          <img src="https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
          <div>
            <h3>Empty <span>Highway</span></h3>
            <a href="#"></a>
          </div>
        </figure>
        <figure className="figure">
          <img src="https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
          <div>
            <h3>City <span>Roadway</span></h3>
            <a href="#"></a>
          </div>
        </figure> */}
          <figure className="figure">
            <div className="heading">
              <h3>Website</h3>
            </div>
            <div className="details">
              <h3>Website</h3>
              <ul>
                <li>Eccomerce</li>
                <li>Website</li>
                <li>Formus</li>
                <li>Blog</li>
              </ul>
            </div>
          </figure>

          <figure className="figure">
            <div className="heading">
              <h3>Website</h3>
            </div>
            <div className="details">
              <h3>Website</h3>
              <ul>
                <li>Eccomerce</li>
                <li>Website</li>
                <li>Formus</li>
                <li>Blog</li>
              </ul>
            </div>
          </figure>

          <figure className="figure">
            <img className="picture" src={website} />
            <div className="heading">
              <h3 className="head">Website</h3>
            </div>
            <div className="details">
              <h3>Website</h3>

              <p>Eccomerce</p>
              <p>Eccomerce</p>
              <p>Eccomerce</p>
              <p>Eccomerce</p>
            </div>
          </figure>
        </div>
      </section>

      <section>
        <main className="page-content">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} 
            first={card.first} 
            second={card.second} 
            third={card.third} 
            fourth={card.fourth} 
            fiveth={card.fiveth} 
            sixth={card.sixth} />
          ))}
        </main>
      </section>
    </div>
  );
};

export default Services;
