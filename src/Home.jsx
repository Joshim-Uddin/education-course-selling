import Achievement from "./Components/Achievement";
import Alumni from "./Components/Alumni";
import Carriculum from "./Components/Carriculum";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
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
<Projects />
</>
)

}
export default Home;