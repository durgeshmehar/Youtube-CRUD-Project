import VideosContext from "../context/videosContext";
import { useContext } from "react";

function useVideos(){
    return useContext(VideosContext);
}
export default useVideos;