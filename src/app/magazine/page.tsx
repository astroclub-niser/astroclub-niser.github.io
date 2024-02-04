import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: 'Kshitij Magazine | NISER Astronomy Club',
  description: 'We are the Astronomy Club of NISER, Bhubaneswar',
}

const Kshitij = () => {
  return (
    <main id="section-magazine">
      <h1 className="page-heading">Kshitij</h1>
      <p className="page-description">NAC&apos;s own in-house magazine encompassing all fields of astronomy.</p>
      <button className="btn"><a target="_blank" href="https://drive.google.com/drive/folders/1hcU2Xz8NAgw1I8iF3Qn2BBAy-U1SBdVc">Read all</a></button>
      {/* <button className="btn"><a href="#">Want to Contribute?</a></button> */}
      <div className="magazine-grid">
        <div className="magazine">
          <a target="_blank" href="https://drive.google.com/file/d/19Ff_veiKVzIaCTbjv5Oa9HI7U15wVaav/view">
            <Image src={'/kshitij/Kshitij_May_2020.jpg'} width={320} height={300} alt="Kshitij 1.0"></Image>
          </a>
          <p className="magazine-issue">Issue 01</p>
          <p className="magazine-release">May 2020</p>
          {/* <p className="magazine-desc">The 1st Edition of Kshitij. Includes a recollection of Chandrayaan 2 landing, RAD@HOME workshop and some fun stuff.</p> */}
        </div>
        <div className="magazine">
          <a target="_blank" href="https://drive.google.com/file/d/1vOArBZ7FtFoyd8oFQHsYkC7PtZcXjrtB/view">
            <Image src={'/kshitij/Kshitij_Dec_2020.jpg'} width={320} height={300} alt="Kshitij 1.0"></Image>
          </a><p className="magazine-issue">Issue 02</p>
          <p className="magazine-release">December 2020</p>
          <p className="magazine-desc"></p>
        </div>
        <div className="magazine">
          <a target="_blank" href="https://drive.google.com/file/d/1pJDicsQtoa6f2DPhuGtfYOPSWpvnxVjL/view">
            <Image src={'/kshitij/Kshitij_Dec_2021.jpg'} width={320} height={300} alt="Kshitij 1.0"></Image>
          </a><p className="magazine-issue">Issue 03</p>
          <p className="magazine-release">December 2022</p>
          <p className="magazine-desc"></p>
        </div>
        <div className="magazine">
          <a target="_blank" href="https://drive.google.com/file/d/1kaqLiAXlc42GCPFabkorGOYLHxq18ROZ/view">
            <Image src={'/kshitij/Kshitij_Dec_2022.jpg'} width={320} height={300} alt="Kshitij 1.0"></Image>
          </a><p className="magazine-issue">Issue 04</p>
          <p className="magazine-release">December 2022</p>
          <p className="magazine-desc"></p>
        </div>
      </div>
    </main>
  )
}

export default Kshitij
