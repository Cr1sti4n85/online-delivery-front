import ExploreMenu from "../../components/client/ExploreMenu";
import FoodDisplay from "../../components/client/FoodDisplay";
import Header from "../../components/client/Header";

const Home = () => {
  return (
    <main className="container">
      <Header />
      <ExploreMenu />
      <FoodDisplay />
    </main>
  );
};

export default Home;
