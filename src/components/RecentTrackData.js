import {useEffect, useState} from 'react';

export const RecentTrackData = ({userName, apiKey}) => {

    const recentTracks = `https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${userName}&api_key=${apiKey}&limit=1&nowplaying=true&format=json`

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
                // console.log(data)
            })
            .catch(() =>
                updateLfmData({error: 'Whoops! Something went wrong with Last.fm'})
            );
    }, []);
    const topAlbumData = () => {
        const {error} = lfmData;
        const track = lfmData?.recenttracks?.track;

        if (error) {
            return <p>{error}</p>;
        }

        if (!track) {
            return <p>Loading</p>;
        }

        const [
            {name: songName, artist: { '#text': artistName } = {}} = {}
        ] = track;

        return (
            <div className=" display flex justify-center ">
                <h3 className="text-center py-8 font-bold">Recent track: {songName} by {artistName}</h3>
            </div>

        );
    };

    return topAlbumData()
};

export default RecentTrackData