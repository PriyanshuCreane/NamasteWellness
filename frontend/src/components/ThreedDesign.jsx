import { Link } from "react-router-dom"
import interactiveBoy from "../../public/interactiveBoy.mp4"
function ThreedDesign() {
  return (
    <div className="w-full h-screen flex  justify-center mt-5">
      <video autoPlay loop muted className="absolute top-20 left-0 w-full h-screen object-cover z-0" style={{ backdropFilter: 'blur(50px)' }}>
          <source src={interactiveBoy} type="video/mp4" />
      </video>
      <Link to='/getstarted'>
      <button className=" bg-[#eeaa61] hover:bg-[#f8d6ac] border border-black rounded-xl w-20 h-10 ">Next</button>
      </Link>
    </div>
  )
}

export default ThreedDesign