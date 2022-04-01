import {useEffect, useState} from 'react';

export const UserData = ({userName, apiKey}) => {

    const userInfo = `https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${userName}&api_key=${apiKey}&format=json`

    const [lfmData, updateLfmData] = useState({});
    useEffect(() => {
        fetch(userInfo)
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
        const track = lfmData?.user;

        if (error) {
            return <p>{error}</p>;
        }

        if (!track) {
            return <p>Loading</p>;
        }



        return <h3 className="text-center py-8 font-bold bg-slate-900	text-white">Username: {track.name} playcount: {track.playcount} </h3>
    };

    return topAlbumData()
};

export default UserData