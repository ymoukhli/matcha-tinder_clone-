import Image from './Image'
export const ProfilePhotos = (props) => {

    return (
        <div className={props.className}>
            <div>Profile photo</div>
            <form action="http://localhost:3030/uploadFile" method="post" enctype="multipart/form-data" className={"grid grid-cols-3 gap-6 " }>
                <input type="file" name="avatar"></input>
                {/* <Image className="" src="bahobali.jpeg" alt="placeholder"></Image>
                <Image className="" src="yami1.jpg" alt="placeholder"></Image>
                <Image className="" src="yami2.jpg" alt="placeholder"></Image>
                <Image className="" src="yami3.jpg" alt="placeholder"></Image>
                <Image className="" src="yami4.jpg" alt="placeholder"></Image>
                <Image className="" src="yami5.jpg" alt="placeholder"></Image> */}
                <button type="submit"></button>
            </form>
            <div>add 2 more photos to continue</div>

        </div>
    )
}

export default ProfilePhotos