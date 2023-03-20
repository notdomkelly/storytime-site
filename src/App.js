import "./App.css";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import NavBar from "./ui-components/NavBar";
import YoutubeVideoCollection from "./ui-components/YoutubeVideoCollection";

function App() {
  return (
    <AmplifyProvider>
      <NavBar style={{ margin: "auto" }} />
      <YoutubeVideoCollection
        style={{ margin: "auto" }}
        overrideItems={({ item, index }) => ({
          videoArea: (
            <iframe
              width="560"
              height="315"
              src={"https://www.youtube.com/embed/" + item.video_code}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          ),
        })}
      />
    </AmplifyProvider>
  );
}

export default App;
