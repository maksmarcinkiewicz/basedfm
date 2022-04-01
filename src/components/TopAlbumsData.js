import {useEffect, useState} from 'react';

export const TopAlbumsData = ({userName, apiKey}) => {

    const topAlbums = `http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${userName}&api_key=${apiKey}&limit=1&format=json`
    const recentTracks = `https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${userName}&api_key=${apiKey}&limit=1&nowplaying=true&format=json`

    const [lfmData, updateLfmData] = useState({});
    useEffect(() => {
        fetch(topAlbums)
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
        const track = lfmData?.topalbums?.album;

        if (error) {
            return <p>{error}</p>;
        }

        if (!track) {
            return <p>Loading</p>;
        }

        const [
            {name: albumName, artist: {name: artistName} = {}} = {}
        ] = track;

        return <h3 className="bg-slate-900 text-center py-8 font-bold text-white">Top album: {albumName} by {artistName}</h3>;
    };

    return topAlbumData()
};

export default TopAlbumsData