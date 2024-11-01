import Listing from "../components/listing/Listing";
import Search from "../components/search/Search";
 
function Home() {
    return (
      
      <div>
        <Listing
          dataSource="http://localhost:3000/Data/Clothing.json"
          title="CLOTHING"
        />
        <br />
        <br />
      </div>
    );

}

export default Home;