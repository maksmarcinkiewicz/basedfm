import './App.css';
import Header from "./components/Header"
import TopAlbumData from "./components/TopAlbumData";
import RecentTrackData from "./components/RecentTrackData";
import UserData from "./components/UserData";
import WeeklyAlbumChartData from "./components/WeeklyAlbumChartData";
import TopTracksData from "./components/TopTracksData";
import React, {useState} from "react";
import "./components/Header.css"

function App() {


    const [userName, setUserName] = useState('KCarao')



    return (
        <div>

            <div className="display flex justify-between p-4">
                <h1 className="text-2xl py-2 font-bold display flex">BASED-FM</h1>

                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 text-gray-700 text-center leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                       type="text"
                       value={userName}
                       onChange={e => setUserName(e.target.value)}
                       placeholder="Search user"
                />



            </div>





           <div className="md:container md:mx-auto md:px-32">
               <UserData
                   userName={userName}
                   apiKey={'8a4ea58597a9054a5ccf40bde6b454d3'}
               />

               <RecentTrackData
                   userName={userName}
                   apiKey={'8a4ea58597a9054a5ccf40bde6b454d3'}
               />

               <WeeklyAlbumChartData
                   userName={userName}
                   apiKey={'8a4ea58597a9054a5ccf40bde6b454d3'}
               />

               <TopTracksData
                   userName={userName}
                   apiKey={'8a4ea58597a9054a5ccf40bde6b454d3'}
               />
               <TopAlbumData
                   userName={userName}
                   apiKey={'8a4ea58597a9054a5ccf40bde6b454d3'}
               />
           </div>



        </div>
    );
}

export default App;
