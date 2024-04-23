import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
function Footer() {
  const currentYear = new Date().getFullYear;
  return (
    <section id="more" className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col  mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img src={logo} alt="HooBank" className="w-[266px] h-[72px] object-contain " />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className="flex-[1.5] flex flex-row flex-wrap w-full justify-between md:mt-0 mt-10 ">
          {footerLinks.map((link, index) => {
            return (
              <div
                key={index}
                className="ss:my-0 my-4 min-w-[150px] flex flex-col"
              >
                <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                  {link.title}
                </h4>
                <ul className="list-none mt-4">
                  {link.links.map((individuallink, indexOfLink) => {
                    return (
                      <li
                        key={individuallink.name}
                        className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite
                         hover:text-secondary cursor-pointer transition-colors duration-300 ease-out ${
                           indexOfLink === link.links.length - 1
                             ? "mb-0"
                             : "mb-3"
                         }`}
                      >
                        {individuallink.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex md:flex-row flex-col w-full justify-between items-center pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-dimWhite">Copyright {currentYear} HooBank. All Rights Reserved.</p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((icon, index) => {
            return (
              <a className="cursor-pointer">
              <img
                key={icon.id}
                src={icon.icon}
                alt={icon.id}
                className={`hoverImage w-[25px] h-[25px] object-contain cursor-pointer ${
                  index === socialMedia.length - 1 ? "mr-0" : "mr-6"
                }`}
              />
              </a>              
            ); 
          })}
        </div>
      </div>
    </section>
  )
}

export default Footer;
