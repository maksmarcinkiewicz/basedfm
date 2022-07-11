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
    }, [recentTracks]);
    const topAlbumData = () => {
        const {error} = lfmData;
        const track = lfmData?.recenttracks?.track;


        const recentTrack = {
            songName: track?.[0]?.name,
            artistName: track?.[0]?.artist?.['#text'],
            albumName: track?.[0]?.album?.['#text'],
            albumImg: track?.[0]?.image?.[2]?.['#text']
        }



        if (!track) {
            return <p>Loading tracks data</p>;
        }


        return (
            <div className="display flex flex-col p-4 bg-[#ddbea9]">
                <div className='display flex items-center justify-between'>
                    <div>
                        <h3 className='font-bold text-lg'>Recently played song</h3>
                        <h3 className='font-bold text-lg'>Song: {recentTrack.songName}</h3>

                        <h3 className='font-medium text-lg'>Artist: {recentTrack.artistName}</h3>

                        <h3 className='font-medium text-md'>Album: {recentTrack.albumName}</h3>
                    </div>
                    <div>
                        <img className='rounded-full border-4 w-24' src={recentTrack.albumImg} alt=""/>
                    </div>
                </div>

            </div>

        );
    };

    return topAlbumData()
};

export default RecentTrackData