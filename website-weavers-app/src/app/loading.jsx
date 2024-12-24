import Weavers from '../assets/images/weavers.svg';

const Loading = () => {
    return (
        <div className="loading">
            <img src={Weavers.src} alt='logo' className='logo'/>
        </div>
    );
};

export default Loading;