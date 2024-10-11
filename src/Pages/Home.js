import Listing from "../components/listing/Listing";

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