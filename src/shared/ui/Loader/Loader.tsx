import cls from './Loader.module.css'; // Import the CSS file for styling

const Loader = () => {
    return (
        <div className={cls.loaderContainer}>
            <div className={cls.loader}></div>
        </div>
    );
};
export default Loader;
