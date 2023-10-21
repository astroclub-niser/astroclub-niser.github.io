import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: 'Kshitij Magazine | NISER Astronomy Club',
  description: 'We are the Astronomy Club of NISER, Bhubaneswar',
}

const kshitij = () => {
  return (
    <main>
      <h1 className="page-heading">Kshitij</h1>
      <p></p>
      <button className="btn"><a href="#">Read all</a></button>
      <button className="btn"><a href="#">Want to Contribute?</a></button>
      <div className="magazine-grid">
        <div className="magazine">
          <Image src={'/Kshitij_Dec_2020.jpg'} width={200} height={300} alt="Kshitij 1.0"></Image>
          <p className="magazine-issue"></p>
          <p className="magazine-release"></p>
          <p className="magazine-desc"></p>
        </div>
        <div className="magazine">
          <Image src={'/Kshitij_Dec_2020.jpg'} width={200} height={300} alt="Kshitij 1.0"></Image>
          <p className="magazine-issue"></p>
          <p className="magazine-release"></p>
          <p className="magazine-desc"></p>
        </div>
        <div className="magazine">
          <Image src={'/Kshitij_Dec_2020.jpg'} width={200} height={300} alt="Kshitij 1.0"></Image>
          <p className="magazine-issue"></p>
          <p className="magazine-release"></p>
          <p className="magazine-desc"></p>
        </div>
        <div className="magazine">
          <Image src={'/Kshitij_Dec_2020.jpg'} width={200} height={300} alt="Kshitij 1.0"></Image>
          <p className="magazine-issue"></p>
          <p className="magazine-release"></p>
          <p className="magazine-desc"></p>
        </div>
      </div>
    </main>
  )
}

export default kshitij