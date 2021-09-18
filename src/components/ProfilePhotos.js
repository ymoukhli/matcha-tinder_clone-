import Image from './Image'
export const ProfilePhotos = (props) => {

    return (
        <div className={props.className}>
            <div>Profile photo</div>
            <div className={"grid grid-cols-3 gap-6 " }>
                <Image className="" src="bahobali.jpeg" alt="placeholder"></Image>
                <Image className="" src="yami1.jpg" alt="placeholder"></Image>
                <Image className="" src="yami2.jpg" alt="placeholder"></Image>
                <Image className="" src="yami3.jpg" alt="placeholder"></Image>
                <Image className="" src="yami4.jpg" alt="placeholder"></Image>
                <Image className="" src="yami5.jpg" alt="placeholder"></Image>
            </div>
            <div>add 2 more photos to continue</div>

        </div>
    )
}

export default ProfilePhotos