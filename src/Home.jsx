import Achievement from "./Components/Achievement";
import Alumni from "./Components/Alumni";
import Carriculum from "./Components/Carriculum";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import RelatedCourses from "./Components/RelatedCourses";

const Home =()=>{
return(
<>
<Navbar />
<Hero />
<Achievement />
<RelatedCourses />
<Alumni />
<Carriculum />
</>
)

}
export default Home;