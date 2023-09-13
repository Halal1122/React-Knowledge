import profile from '../../images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center container mx-auto p-4'>
            <h1 className='text-4xl font-bold '>React Knowledge</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;