import {useEffect, useState} from 'react';

export const TopAlbumData = ({userName, apiKey}) => {

    const topAlbums = `http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${userName}&api_key=${apiKey}&limit=1&format=json`

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
    }, [topAlbums]);
    const topAlbumData = () => {
        const {error} = lfmData;
        const album = lfmData?.topalbums?.album;


        const topAlbum = {
            albumName: album?.[0]?.name,
            albumArtist: album?.[0]?.artist?.name,
            albumImg: album?.[0]?.image?.[2]?.['#text'],
            albumPlayCount: album?.[0]?.playcount,
            albumUrl: album?.[0]?.url

        }



        if (!album) {
            return <p>Loading top albums data</p>;
        }



        return (
            <div className="display flex flex-col p-4 bg-[#ffe8d6]">
                <div className='display flex items-center justify-around'>
                    <div>
                        <h3 className='font-bold text-lg'>Album: {topAlbum.albumName}</h3>

                        <h3 className='font-medium text-lg'>Artist: {topAlbum.albumArtist}</h3>

                        <h3 className='font-medium text-md'>Play count: {topAlbum.albumPlayCount}</h3>
                        <a className='font-bold text-md hover:text-white underline' href={topAlbum.albumUrl} target="_blank">Check Album</a>
                    </div>
                    <div>
                        <img className='rounded-full border-4 w-24:' src={topAlbum.albumImg} alt=""/>
                    </div>
                </div>

            </div>
        )
    };

    return topAlbumData()
};

export default TopAlbumData