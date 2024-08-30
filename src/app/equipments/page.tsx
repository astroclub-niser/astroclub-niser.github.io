"use client"
import { Metadata } from "next"
import SimpleImageSlider from "react-simple-image-slider";

const elevenInch = [
  { url: "/photos/11inch-1.JPG" },
  { url: "/photos/11inch-3.jpg" },
  { url: "/photos/11inch-4.jpg" },
  { url: "/photos/11inch-7.jpg" },
  { url: "/photos/11inch-8.jpg" },
  { url: "/photos/11inch-12.jpg" },
];

const eightInch = [
  { url: "/photos/8inch-3.JPG" },
  { url: "/photos/8inch-2.jpg" },
  { url: "/photos/8inch-4.jpg" },
];

const sixInch = [
  { url: "/photos/6inch-1.JPG" },
  { url: "/photos/6inch-2.JPG" },
  { url: "/photos/6inch-3.JPG" },
  { url: "/photos/6inch-5.jpg" },
];

const sliderHeight = 400
const sliderWidth = "100%"

const Equipments = () => {
  return (
    <main>
      <h1 className="page-heading">Our Arsenal</h1>
      <p className="page-description">Here is an overview of the impressive range of telescopes that our club has, allowing our members to explore the wonders of the night sky like never before.</p>

      <div className="equipments-grid">

        <div className="equipment">
          
          <div className="equipment-details">
            <h3>Paddy</h3>
            <h4>Celestron 11-inch</h4>
            <p>The Celestron 11-inch Schmidt-Cassegrain Hybrid telescope is the biggest telescope that NAC has and is used for terrestrial and deep sky viewing and astrophotography. The 11-inch CPC focal length is 28 cm and with it’s eyepieces it can yield a magnification of 40x to a whopping 1650x.</p>
            <p>It has a revolutionary and very easy to use SkyAlign alignment technology. We simply need to locate and manually point to 3 bright celestial objects, and it’s software simply models the night sky to determine the position of every star, planet, and celestial object above the horizon. Once aligned, the remote hand control allows direct access to each of the celestial catalogs in its remarkably user-friendly database. It’s database contains more than 40,000 celestial objects, including the Caldwell Catalog, as well as NGC Galaxies, nebulae, and planets. It has been used to view the Whirlpool Galaxy, Sombrero Galaxy, Moon-Mars Occulation and Saturn Jupiter Conjunction and is also used in regular club observation sessions.</p>
          </div>

          <div className="equipment-figures">
            <SimpleImageSlider
              style={{ margin: '0 auto'}}
              width={'100%'}
              height={sliderHeight}
              autoPlay={true}
              images={elevenInch}
              showBullets={true}
              slideDuration={1}
              showNavs={true}
            />
          </div>
        </div>

        <div className="equipment">
          
          <div className="equipment-details">
            <h3>Bhaskara</h3>
            <h4>8-inch Reflecting Telescope</h4>
            <p>SkyWatcher Quattro 200P is an 8-inch Reflecting Newtonian Telescope with an equitorial mount. It can be fitted with cameras to take long exposure photographs and to trace the pattern of stars.</p>
            <p>The instruction manual for this telescope can be found <a target="_blank" style={{textDecoration: 'underline'}} href="https://drive.google.com/file/d/1-CCV4krJJo7kB_kyvhxWOvbpdDgY_G84/view?usp=sharing">here</a>.</p>
          </div>

          <div className="equipment-figures">
            <SimpleImageSlider
              width={sliderWidth}
              height={sliderHeight}
              autoPlay={true}
              images={eightInch}
              slideDuration={1}
              showBullets={true}
              showNavs={true}
            />
          </div>
        </div>

        <div className="equipment">
          
          <div className="equipment-details">
            <h3>6-inch Reflecting Telescope</h3>
            <h4>The Junior</h4>
            <p>6-inch Reflecting Newtonian Telescope with an Equitorial Mount. It has been with us since 10th IOAA.</p>
            <p></p>
          </div>

          <div className="equipment-figures">
            <SimpleImageSlider
              width={sliderWidth}
              height={sliderHeight}
              autoPlay={true}
              slideDuration={1}
              images={sixInch}
              showBullets={true}
              showNavs={true}
            />
          </div>
        </div>

        {/* <div className="equipment">
          
          <div className="equipment-details">
            <h3>Celestron Skyris 236M Camera</h3>
            <h4>CMOS Sensor</h4>
            <p>The Celestron Skyris 236M Monochrome Camera is a planetary imaging camera and is very sensitive in the near-infrared range. It has been involved in all our projects, icluding spectroscopy, photometry as well as (complete this)</p>
            <p></p>
          </div>

          <div className="equipment-figures">
            <SimpleImageSlider
              width={sliderWidth}
              height={sliderHeight}
              autoPlay={true}
              slideDuration={1}
              images={sixInch}
              showBullets={true}
              showNavs={true}
            />
          </div>
        </div> */}

      </div>
    </main>
  )
}

export default Equipments