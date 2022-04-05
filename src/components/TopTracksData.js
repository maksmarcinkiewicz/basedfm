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
                //console.log(data)
            })
            .catch(() =>
                updateLfmData({error: 'Whoops! Something went wrong with Last.fm'})
            );
    }, []);
    const topAlbumData = () => {
        const {error} = lfmData;
        const track = lfmData?.toptracks?.track;

        const topTrack = {
            songName: track?.[0].name,
            artistName: track?.[0].artist?.name,

            albumImg: track?.[0].image?.[2]?.['#text'],
            playCount: track?.[0].playcount
        }

        const topTrack2 = {
            songName: track?.[1].name,
            artistName: track?.[1].artist?.name,

            albumImg: track?.[1].image?.[2]?.['#text'],
            playCount: track?.[1].playcount
        }

        const topTrack3 = {
            songName: track?.[2].name,
            artistName: track?.[2].artist?.name,

            albumImg: track?.[2].image?.[2]?.['#text'],
            playCount: track?.[2].playcount
        }

        const topTrack4 = {
            songName: track?.[3].name,
            artistName: track?.[3].artist?.name,
            albumImg: track?.[3].image?.[2]?.['#text'],
            playCount: track?.[3].playcount
        }

        const topTrack5 = {
            songName: track?.[4].name,
            artistName: track?.[4].artist?.name,
            albumImg: track?.[4].image?.[2]?.['#text'],
            playCount: track?.[4].playcount
        }
console.log(track)
        if (error) {
            return <p>{error}</p>;
        }

        if (!track) {
            return <p>Loading</p>;
        }



        return (
            <div className="bg-[#ddbea9]">
                <div className='p-4'>
                    <h3 className='font-bold text-lg'>Song: {topTrack.songName}</h3>
                    <h3 className='font-medium text-lg'>Artist: {topTrack.artistName}</h3>
                    <h3 className='font-medium text-md'>Play count: {topTrack.playCount}</h3>
                </div>
                <div className='p-4'>
                    <h3 className='font-bold text-lg'>Song: {topTrack2.songName}</h3>
                    <h3 className='font-medium text-lg'>Artist: {topTrack2.artistName}</h3>
                    <h3 className='font-medium text-md'>Play count: {topTrack2.playCount}</h3>
                </div>
                <div className='p-4'>
                    <h3 className='font-bold text-lg'>Song: {topTrack3.songName}</h3>
                    <h3 className='font-medium text-lg'>Artist: {topTrack3.artistName}</h3>
                    <h3 className='font-medium text-md'>Play count: {topTrack3.playCount}</h3>
                </div>
                <div className='p-4'>
                    <h3 className='font-bold text-lg'>Song: {topTrack4.songName}</h3>
                    <h3 className='font-medium text-lg'>Artist: {topTrack4.artistName}</h3>
                    <h3 className='font-medium text-md'>Play count: {topTrack4.playCount}</h3>
                </div>
                <div className='p-4'>
                    <h3 className='font-bold text-lg'>Song: {topTrack5.songName}</h3>
                    <h3 className='font-medium text-lg'>Artist: {topTrack5.artistName}</h3>
                    <h3 className='font-medium text-md'>Play count: {topTrack5.playCount}</h3>
                </div>
            </div>
        );
    };

    return topAlbumData()
};

export default TopTracksData