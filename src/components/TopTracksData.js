import {useEffect, useState} from 'react';

export const TopTracksData = ({userName, apiKey}) => {

    const recentTracks = `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${userName}&api_key=${apiKey}&format=json`

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
        const track = lfmData?.toptracks?.track;

        if (error) {
            return <p>{error}</p>;
        }

        if (!track) {
            return <p>Loading</p>;
        }

        const [
            {name: songName, artist: {name: artistName} = {},  image: {0: {'#text': imgurl}}} = {}
        ] = track;

        return (
            <div>
                <h3 className="text-center py-8 font-bold">Favorite track: {songName} by {artistName}</h3>
                <img src={imgurl} alt=""/>
            </div>
        );
    };

    return topAlbumData()
};

export default TopTracksData