import {useEffect, useState} from 'react';

export const WeeklyAlbumChartData = ({userName, apiKey}) => {

    const recentTracks = `https://ws.audioscrobbler.com/2.0/?method=user.getweeklyalbumchart&user=${userName}&api_key=${apiKey}&format=json`

    const [lfmData, updateLfmData] = useState({});
    useEffect(() => {
        fetch(recentTracks)
            .then(response => {
                if (response.ok) {
                    return response.json();

                }
                throw new Error('error');
            })
            .then(data => {
                updateLfmData(data)
                console.log(data)
            })
            .catch(() =>
                updateLfmData({error: 'Whoops! Something went wrong with Last.fm'})
            );
    }, []);
    const topAlbumData = () => {
        const {error} = lfmData;
        const track = lfmData?.weeklyalbumchart?.album;

        if (error) {
            return <p>{error}</p>;
        }

        if (!track) {
            return <p>Loading</p>;
        }

        const [{name: albumName, artist: { '#text': artistName },  }] = track;

        return <h3 className="text-center py-8 font-bold bg-slate-900	text-white" >Favorite album of the week: {albumName} by {artistName}</h3>;
    };

    return topAlbumData()
};

export default WeeklyAlbumChartData