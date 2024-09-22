import WorkTogether from "./WorkTogether";
import Benefits from "./Benefits";
import Header from "./Header";
import Types from "./Types";
import Final from "./Final";

function Partner() {
  return (
    <div className="bg-[#111112] text-white">
      <Header />
      <WorkTogether />
      <Types />
      <Benefits />
      <Final />
    </div>
  )
}

export default Partner