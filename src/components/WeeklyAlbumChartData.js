import {useEffect, useState} from 'react';
import {type} from "@testing-library/user-event/dist/type";

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
            })
            .catch(() =>
                updateLfmData({error: 'Whoops! Something went wrong with Last.fm'})
            );
    }, []);
    const topAlbumData = () => {
        const {error} = lfmData;
        const album = lfmData?.weeklyalbumchart?.album;

        console.log(album)
        const topAlbum = {
            albumName: album?.[0].name,
            artistName: album?.[0].artist?.['#text'],
            playCount: album?.[0].playcount,
            rank: album?.[0]?.['@attr'].rank

        }
        const top2Album = {
            albumName: album?.[1].name,
            artistName: album?.[1].artist?.['#text'],
            playCount: album?.[1].playcount,
            rank: album?.[1]?.['@attr'].rank

        }

        const top3Album = {
            albumName: album?.[2].name,
            artistName: album?.[2].artist?.['#text'],
            playCount: album?.[2].playcount,
            rank: album?.[2]?.['@attr'].rank

        }


        if (error) {
            return <p>{error}</p>;
        }

        if (!album) {
            return <p>Loading</p>;
        }


        return (
            <div className="bg-[#ffe8d6]">
                <div className="p-4">
                    <h3 className='font-bold text-lg'>Top {topAlbum.rank} album of a week</h3>

                    <h3 className='font-bold text-lg'>Song: {topAlbum.albumName}</h3>

                    <h3 className='font-medium text-lg'>Artist: {topAlbum.artistName}</h3>

                    <h3 className='font-medium text-md'>Album: {topAlbum.playCount}</h3>
                </div>
                <div className="p-4">
                    <h3 className='font-bold text-lg'>Top {top2Album.rank} album of a week</h3>

                    <h3 className='font-bold text-lg'>Song: {top2Album.albumName}</h3>

                    <h3 className='font-medium text-lg'>Artist: {top2Album.artistName}</h3>

                    <h3 className='font-medium text-md'>Album: {top2Album.playCount}</h3>
                </div>
                <div className="p-4">
                    <h3 className='font-bold text-lg'>Top {top3Album.rank} album of a week</h3>

                    <h3 className='font-bold text-lg'>Song: {top3Album.albumName}</h3>

                    <h3 className='font-medium text-lg'>Artist: {top3Album.artistName}</h3>

                    <h3 className='font-medium text-md'>Album: {top3Album.playCount}</h3>
                </div>
            </div>
        );
    };

    return topAlbumData()
};

export default WeeklyAlbumChartData