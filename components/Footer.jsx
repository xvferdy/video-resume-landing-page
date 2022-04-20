import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container footer__container">
        <div className="footer__permalinks">
          {/* ADDRESS */}
          <div className="address">
            <a className="address__logo" href="#">
              <Image
                width={33}
                height={33}
                src="/assets/youtube.png"
                alt="logo"
              />
              <h4 href="#">Visume</h4>
            </a>

            <p>2238 Partha Elen Street, New Jersey, USA, 3322145698</p>
            <div className="address__socials">
              <Link href="#" passHref>
                <a>
                  <Image
                    src="/assets/facebook.png"
                    width={24}
                    height={24}
                    alt="Facebook"
                  />
                </a>
              </Link>
              <Link href="#" passHref>
                <a>
                  <Image
                    src="/assets/twitter.png"
                    width={24}
                    height={24}
                    alt="Twitter"
                  />
                </a>
              </Link>
              <Link href="#" passHref>
                <a>
                  <Image
                    src="/assets/instagram.png"
                    width={24}
                    height={24}
                    alt="Instagram"
                  />
                </a>
              </Link>
              <Link href="#" passHref>
                <a>
                  <Image
                    src="/assets/linkedin.png"
                    width={24}
                    height={24}
                    alt="Linkedin"
                  />
                </a>
              </Link>
            </div>
          </div>

          {/* USEFULL LINKS */}
          <div className="usefull">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <Link href="#" passHref>
                  <a>Payment & Tax</a>
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  <a>Terms of Service</a>
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  <a>Your Account</a>
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  <a>Privacy Policy</a>
                </Link>
              </li>
            </ul>
          </div>

          {/*OUR COMPANY */}
          <div className="company">
            <h4>Our Company</h4>
            <ul>
              <li>
                <Link href="#" passHref>
                  <a>About us</a>
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  <a>Media</a>
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  <a>Contact us</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="newsletter">
            <h4>Subscribe to Newsletter</h4>
            <form>
              <input
                name="subscribe"
                type="email"
                placeholder="Email Address"
                required
              />
            </form>
            <p>help@visume.link</p>
            <p>396-987 456 885</p>
          </div>
        </div>

        <div className="footer__copyright">
          <small>&copy; 2021 Visume</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
