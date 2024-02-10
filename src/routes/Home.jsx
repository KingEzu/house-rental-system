
import Navbar from "../componets/Navbar/Navbar";
import Homeintr from "../componets/intro/Homeintr"
import Member from "../componets/members/member";
import Describe from "../componets/describe/Describe";
import Hosearch from "../componets/HoSearch/Hosearch";
import Footer from "../componets/Footer/footer"
function Home (){

    
    return(
        <>
            <Navbar/>
            <Homeintr/>
            <Describe />
            <Hosearch/>
            <Member/>
       
           
        </>
       
  
    );

}
export default Home;