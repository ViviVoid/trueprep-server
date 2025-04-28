import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import VoiceChat from "./pages/VoiceChat";
import VideoCreator from "./pages/VideoCreator";
import Header from "./components/nav/Header";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="voice-chat" element={<VoiceChat />} />
      <Route path="video-creator" element={<VideoCreator />} />
    </Route>
  )
);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
