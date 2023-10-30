"use client"
import { Metadata } from "next"
import SimpleImageSlider from "react-simple-image-slider";

// export const metadata: Metadata = {
//   title: 'Equipments | NISER Astronomy Club',
//   description: 'We are the Astronomy Club of NISER, Bhubaneswar',
// }

const elevenInch = [
  { url: "/photos/11inch-1.jpg" },
  { url: "/photos/11inch-3.jpg" },
  { url: "/photos/11inch-4.jpg" },
  { url: "/photos/11inch-7.jpg" },
  { url: "/photos/11inch-8.jpg" },
  { url: "/photos/11inch-12.jpg" },
];

const eightInch = [
  { url: "/photos/8inch-3.jpg" },
  { url: "/photos/8inch-2.jpg" },
  { url: "/photos/8inch-4.jpg" },
];

const sixInch = [
  { url: "/photos/6inch-1.jpg" },
  { url: "/photos/6inch-2.jpg" },
  { url: "/photos/6inch-3.jpg" },
  { url: "/photos/6inch-5.jpg" },
];

const sliderHeight = 450
const sliderWidth = 650

const Equipments = () => {
  return (
    <main>
      <h1 className="page-heading">Our Arsenal</h1>
      <p></p>

      <div className="equipments-grid">

        <div className="equipment">
          
          <div className="equipment-details">
            <h3>Celestron 11-inch</h3>
            <h4>The Senior</h4>
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
            <h3>8-inch Reflecting Telescope</h3>
            <h4>The Sophomore</h4>
            <p>8-inch refelctive telescope with an equitorial mount. Can be fitted with cameras to take long exposure photographs and to trace the pattern of stars.</p>
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

      </div>
    </main>
  )
}

export default Equipments