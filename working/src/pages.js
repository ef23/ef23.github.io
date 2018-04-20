import React from 'react';
import scrollToComponent from 'react-scroll-to-component';
import { Link } from "react-router-dom";
import './blog.css';

class StripeBlog extends React.Component {

  render() {
    return (
    <div className = "container-fluid literallyjustpadding">
      <div className ="row">
        <div className = "col-md-2 col-md-offset-1">
          <div className="sidenav">
            <p>Contents</p>
            <button onClick={() => scrollToComponent(this.refs.one, { offset: -20, align: 'top', duration: 1000})}>Welcome!</button>
            <br/>
            <button onClick={() => scrollToComponent(this.refs.two, { offset: -20, align: 'top', duration: 1000})}>The Process</button>
            <br/>
            <Link to="/">Back to Home</Link>
          </div>
        </div>
        <div className = "col-md-5 col-md-offset-1">
          <img alt="img" className="logo" src={require("./images/stripelogo.png")}/>
          <hr />
          {sections.map((d) => {
            return (
              <section ref={d.section}>
              <h2> {d.title} </h2>
              <p> {d.content} </p>
              <hr/>
            </section>
            )
          })}
        </div>
      </div>
    </div>
    )
  }
}

const sections =
[
  {
    title: "Welcome!",
    content:
      (<p>
        Hello and welcome! As a student who hadn't done any internships at larger, more well-known companies, I'd always wondered what interning at one would be like; there were a few blogs here and there scattered across the internet of people who'd done internships at Google, Facebook, etc. describing their experiences. Stripe is not exactly the most prominent company outside of the tech and finance industry, as most people don't realize that when they pay online, Stripe is most likely handling the payment. I thought this blog would help prospective or incoming Stripe interns, or people who are just curious and want an insider look at a software engineering internship in the Bay Area!
      </p>),
      section: "one"
  },
  {
    title: "The Process",
    content:
      (
      <div>
      <p className="indent">
        As of the time of this posting, I'm sitting very sadly in cloudy, freezing Ithaca, NY instead of the beautiful Bay Area, so my internship hasn't begun yet! But a little bit of background - Stripe is primarily concerned with web and mobile payments, and are one of the biggest payment processing providers today for internet businesses. They currently handle the transactions of billions of dollars all around the world and currently have companies such as Facebook, Lyft, and Yelp as customers, to name a few. Yet, Stripe is not the largest company - their headcount totals around ~900 people, which is rapidly increasing as they expand, as they only had around 500 in 2015.
      </p>
      <p className="indent">
        That's great at all, so how do you become part of that 900 count, working at Stripe? During internship application season, which lasted from late August to early December for me in my sophomore year at Cornell, one of the companies that came up under my job search was Stripe. They had a brief online application when I applied - a simple resume drop, on August 23, 2017. A week later, after a couple of rejections from other companies quickly piled on, I received an email:
      </p>
      <p className = "email">
      Hi there,<br/>
        Thank you so much for your application and interest in Stripe!  In terms of next steps, we'd like you to take a short programming test. This test is designed to help us better understand your programming skills and how you address certain types of challenges.
      </p>
      <p className="indent">
      After pushing it off for almost three weeks (the deadline I was given), due to work, extracurriculars, and general nervousness surrounding taking coding challenges, I completed the HackerRank test. I had been reading that if even a single sample test case failed, there was no chance for you, but luckily I completed the challenge in a reasonable amount of time with all tests passed. It was a very fair, run-of-the-mill challenge - review your basic data structures and algorithms classes! Those will carry you far during the dreaded internship season.
      </p>
      <p className="indent">
      Almost a month after I initially received the challenge, and about two weeks after I completed it and after more rejections and other interviews, I received an email walking out of a Google event:
      </p>
      <p className="email">
      Hi Eric,<br/>
Thanks so much for applying to Stripe and taking the test! We've reviewed your application and would love to move forward with the next step of our interview process, a technical phone screen with one of our engineers.

      </p>
      <p className="indent">
      I had done it! At this point, I had researched the entire Stripe interview process - first, there was the intial resume drop (although this later turned to be a longer application with open-ended questions). Next was the hour-long HackerRank coding challenge. After that, there was another hour-long interview with an engineer over video chat Finally, you are brought on-site for a three to four hour interview with multiple engineers testing your software engineering skills. I proceeded to the first interview over video chat, which again, was another straightforward and fair interview.
      </p>
      <p className="indent">
      At this point, it had been a month and a half since I began the process - mid October, although this was because I had scheduled the interview the latest possible since I had other interviews. I was estatic to fly to California, and even more, San Francisco! At this point I had to schedule a call with my recruiter, which was mostly scheduling the on-site and answering any questions I had. This was where I learned Stripe's intern program is unsurprisingly, relatively small - only about forty interns (compared to the 1,500 of Facebook and Google) are taken each year.
      </p>
      <p className="indent">
      The final round interview was without a doubt, one of the best interviews I've ever experienced. As my internship choices winded down and I was stuck in Google project matching, I was sick and tired of the LeetCode-esque coding challenges, testing mostly trivial knowledge of whether I knew how to multiply numbers in an array by each other without using division or being able to do pointless bit arithmetic. However, Stripe tested more software-engineering oriented style questions, as I coded on a laptop and not whiteboards, and was allowed to search the internet for help, which tested more applicable SWE skills.
      </p>
      <p className="indent">
        After sadly returning to the frigid ice block that was Cornell (and after a red-eye flight that I booked myself, don't do this to yourself), I received an email from my recruiter scheduling a phone call - telling me I had an offer! I was estatic and knew I was going to Stripe, as Google host matching dragged on.
      </p>
      </div>
      ),
      section: "two"
  }
]


export default StripeBlog