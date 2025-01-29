import Weavers from '../assets/images/weavers.svg';

const Loading = () => {
    return (
        <div className="relative min-h-screen min-w-full flex items-center justify-center">
            <div className="relative inset-0 top-50 left-50 w-2/5 h-2/5">
                <img src={Weavers.src} alt='logo' className='logo animate-spin object-cover'/>
            </div>
        </div>
    );
};

export default Loading;