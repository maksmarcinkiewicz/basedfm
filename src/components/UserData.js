import {useEffect, useState} from 'react';
import {motion} from "framer-motion"

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
            })
            .catch(() =>
                updateLfmData({error: 'Whoops! Please provide a proper nickname'})
            );
    }, [userInfo]);


    const topAlbumData = () => {
        const {error} = lfmData;
        const user = lfmData?.user;

        let options = {year: 'numeric', month: 'long', day: 'numeric'};


        const userInfo = {
            userName: user?.name,
            userImg: user?.image?.[2]?.['#text'],
            playCount: user?.playcount,
            registeredDate: new Date(user?.registered?.unixtime * 1000).toLocaleString('en-US', options)
        }


        if (error) {
            return <p>{error}</p>;
        }

        if (!user) {
            return <p>Loading user data</p>;
        }


        return (
            <motion.div className="display flex justify-between p-4 bg-[#cb997e] items-center">
                <div className="display flex flex-col">
                    <h3 className='font-poppins text-xl font-bold'>User: {userInfo.userName}</h3>
                    <h3 className='font-poppins text-lg font-bold'>Play count: {userInfo.playCount}</h3>
                    <h3 className='font-poppins text-md font-regular'>From: {userInfo.registeredDate}</h3>

                </div>
                <motion.img whileHover={{scale: 1.3}}
                            whileTap={{scale: 0.8}} className='rounded-full border-4 w-32' src={userInfo.userImg}
                            alt=""/>

            </motion.div>
        )
    };


    return topAlbumData()
};

export default UserData