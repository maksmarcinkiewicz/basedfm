import './App.css';
import Header from "./components/Header"
import TopAlbumsData from "./components/TopAlbumsData";
import RecentTrackData from "./components/RecentTrackData";
import UserData from "./components/UserData";
import WeeklyAlbumChartData from "./components/WeeklyAlbumChartData";
import TopTracksData from "./components/TopTracksData";

function App() {

    return (
        <div>
            <Header/>
            <UserData
                userName={'maaxiu'}
                apiKey={'8a4ea58597a9054a5ccf40bde6b454d3'}
            />
            <RecentTrackData
                userName={'maaxiu'}
                apiKey={'8a4ea58597a9054a5ccf40bde6b454d3'}
            />
            <WeeklyAlbumChartData
                userName={'maaxiu'}
                apiKey={'8a4ea58597a9054a5ccf40bde6b454d3'}
            />
            <TopTracksData
                userName={'maaxiu'}
                apiKey={'8a4ea58597a9054a5ccf40bde6b454d3'}
            />
            <TopAlbumsData
                userName={'maaxiu'}
                apiKey={'8a4ea58597a9054a5ccf40bde6b454d3'}
            />




        </div>
    );
}

export default App;
