import { feedback } from "../constants/feedback";
import styles from "../constants/styles";
import FeedbackCard from "./FeedbackCard";
import Review from "./Review";
import './Testimonial.css'
const Testimonials = () => (

  <main>
    <section className="container">
      <div children="title">
        <h2>Our <span className="gradient__text">Review</span></h2>
        <div className="underline"></div>
      </div>
      <Review />
    </section>
  </main>
);

export default Testimonials;
