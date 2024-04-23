import { feedback } from "../constants";
import FeedBackCard from "./FeedBackCard";
import styles from "../style";
const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
    <div className="absolute z-0 w-[60%] h-[60%] -right-[50%] blue__gradient"></div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          What people are <br className="sm:block hidden" />
          saying about us
        </h2>
        <div className="w-full md:mt-o mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full relative z-[1] feedback-container">
        {feedback.map(item => {
          return <FeedBackCard key={item.id} {...item} />
        })}
      </div>
    </section>
  );
}

export default Testimonials;
