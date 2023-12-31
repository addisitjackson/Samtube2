/**
 * Main()
 * ------------------------------
 * will render main page.
 * ToDo: need to set up the containers, and layout for the page.
 * @returns 
 */

import { useEffect, useState } from "react"
import testAPI from "../../api/fetch";
import Video from "./Video";
import { VideoCard } from "./VideoCard";
import { useParams } from "react-router";

/**
 * VideoPlayerLayout()
 * -------------------------------------
 * container for the video player + feed + etc.
 * @returns 
 */
export default function VideoPlayerLayout(){
    const [videos, setVideos] = useState([]);
    useEffect(()=>{
        testAPI().then((response)=>response.json()).then((json)=>setVideos(json.items)).catch((err)=>console.error(err));
    },[]);

    const { id } = useParams();

    return(
        <main>
            {/*temp main page to test fetching api */}
            <div className="container-fluid mb-3" >
                <div className="row">
                    <div className="col-md-9">
                        {/** left column for video & comments & etc */}
                        <Video id={id}/>
                    </div>
                    <div className="col-md-3">
                        {/** right column for a list */}
                        {videos.map((video)=>(
                            <div className="card h-25 w-100" key={video.id.videoId} >
                                <VideoCard video={video}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}