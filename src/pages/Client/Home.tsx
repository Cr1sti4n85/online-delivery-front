import { useState } from "react";
import ExploreMenu from "../../components/client/ExploreMenu";
import FoodDisplay from "../../components/client/FoodDisplay";
import Header from "../../components/client/Header";
import { FoodCategory } from "../../types.d";

const Home = () => {
  const [category, setCategory] = useState(FoodCategory.All);
  return (
    <main className="container">
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} searchText="" />
    </main>
  );
};

export default Home;
