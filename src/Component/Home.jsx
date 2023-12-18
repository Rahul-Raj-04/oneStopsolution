import { Card } from "./Card";
import Greetingpage from "./Greetingpage";

import ServicePage from "./ServicePage";
import { OnlineForm } from "./OnlineForm";
import DownloadPage from "./DownloadPage";

function Home() {
  return (
    <div>
      <DownloadPage />
      <Greetingpage />
      <ServicePage />
      <Card />
      <OnlineForm />
    </div>
  );
}

export default Home;
