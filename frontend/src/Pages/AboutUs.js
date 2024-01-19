import React from 'react'
import "./AboutUs.css"

const AboutUs = () => {
  return (
    <div>
     <section id="overview">
    <div class="overview-content">
        <h2>Who Are We?</h2>
        <p class="overview-description">
            We are Zealits Solutions, a software development and services consulting company providing premium services to clients globally. Established in the summer of 2007, we specialize in software development, web design, custom application development, product development, Rich Internet Applications (RIAs), design/multimedia services, SEO lifecycle services, Six Sigma solutions, and Corporate Branding solutions.
        </p>
        <div class="services-list">
            <div class="service">
                <h3>Consulting & Planning</h3>
                <p>An effective application requires clear goals, comprehensive planning, and expert execution. Contact us for a free consultation.</p>
            </div>
            <div class="service">
                <h3>Architecture & Design</h3>
                <p>We organize all aspects of the project while constantly communicating with the client, creating smart and usable interfaces with a strong focus on accessibility and semantically correct markup.</p>
            </div>
            <div class="service">
                <h3>Application Development</h3>
                <p>We offer robust and sophisticated solutions, from content management systems to specifically targeted web applications, ensuring high usability and search engine optimization.</p>
            </div>
        </div>
    </div>
</section>

<section id="services">
    <div class="services-content">
        <h2>Our Services</h2>
        <p class="services-description">
            Our seasoned technical and project management team will guide you from a business idea to the implementation of a cost-effective software solution. We deliver valuable business tools specially designed to serve the specific needs of your business.
        </p>
        <div class="services-list">
            <div class="service1">
                <h3>Web/Mobile</h3>
                <ul>
                    <li>Enterprise Portal Development</li>
                    <li>Website Design, Re-design, Branding, and Migration</li>
                    <li>Mobile Applications - Android and iPhone Apps</li>
                    <li>Web and Mobile Analytics</li>
                </ul>
            </div>
            <div class="service1">
                <h3>Information Technology</h3>
                <ul>
                    <li>SEO Consulting</li>
                    <li>Cloud Infrastructure Solutions</li>
                    <li>Application Development & Migration</li>
                    <li>Six Sigma Business Solutions</li>
                    <li>Target Marketing</li>
                </ul>
            </div>
        </div>
    </div>
</section>
      </div>
   
  )
}

export default AboutUs