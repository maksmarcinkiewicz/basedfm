import {Fragment, useEffect, useState} from 'react';
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
    }, [recentTracks]);
    const topAlbumData = () => {
        const {error} = lfmData;
        const album = lfmData?.weeklyalbumchart?.album;


        const topAlbum = {
            albumName: album?.[0]?.name,
            artistName: album?.[0]?.artist?.['#text'],
            playCount: album?.[0]?.playcount,
            rank: album?.[0]?.['@attr']?.rank

        }
        const top2Album = {
            albumName: album?.[1]?.name,
            artistName: album?.[1]?.artist?.['#text'],
            playCount: album?.[1]?.playcount,
            rank: album?.[1]?.['@attr']?.rank

        }

        const top3Album = {
            albumName: album?.[2]?.name,
            artistName: album?.[2]?.artist?.['#text'],
            playCount: album?.[2]?.playcount,
            rank: album?.[2]?.['@attr']?.rank

        }


        if (!album) {
            return <p>Loading weekly albums data</p>;
        }


        return (
            <Fragment>
                <h3 className="bg-[#ffe8d6] text-2xl font-bold text-center pt-2">Top 3 albums of a week</h3>
                <div className="flex flex-col md:flex-row bg-[#ffe8d6]">


                    <div className="p-4 md:basis-1/3">
                        <h3 className='font-bold text-lg'>Top {topAlbum.rank} album of a week</h3>

                        <h3 className='font-bold text-lg'>Album: {topAlbum.albumName}</h3>

                        <h3 className='font-medium text-lg'>Artist: {topAlbum.artistName}</h3>

                        <h3 className='font-medium text-md'>Play count: {topAlbum.playCount}</h3>
                    </div>
                    <div className="p-4 md:basis-1/3">
                        <h3 className='font-bold text-lg'>Top {top2Album.rank} album of a week</h3>

                        <h3 className='font-bold text-lg'>Album: {top2Album.albumName}</h3>

                        <h3 className='font-medium text-lg'>Artist: {top2Album.artistName}</h3>

                        <h3 className='font-medium text-md'>Play count: {top2Album.playCount}</h3>
                    </div>
                    <div className="p-4 md:basis-1/3">
                        <h3 className='font-bold text-lg'>Top {top3Album.rank} album of a week</h3>

                        <h3 className='font-bold text-lg'>Album: {top3Album.albumName}</h3>

                        <h3 className='font-medium text-lg'>Artist: {top3Album.artistName}</h3>

                        <h3 className='font-medium text-md'>Play count: {top3Album.playCount}</h3>
                    </div>
                </div>
            </Fragment>

        );
    };

    return topAlbumData()
};

export default WeeklyAlbumChartData