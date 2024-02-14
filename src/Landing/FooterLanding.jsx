const FooterLanding = () => {
    return (
        <>
            <footer className="flex flex-col items-center justify-center h-60 w-full bg-[#8BCA00] bg-cover bg-center text-white text-center font-poppins">
                <div className="flex space-x-2 md:space-x-4">
                    <a href="#" className="text-white text-[12px] md:text-[16px]">Home</a>
                    <span>|</span>
                    <a href="#" className="text-white text-[12px] md:text-[16px]">About Us</a>
                    <span>|</span>
                    <a href="#" className="text-white text-[12px] md:text-[16px]">Workouts</a>
                    <span>|</span>
                    <a href="#" className="text-white text-[12px] md:text-[16px]">Membership</a>
                    <span>|</span>
                    <a href="#" className="text-white text-[12px] md:text-[16px]">Blog</a>
                    <span>|</span>
                    <a href="#" className="text-white text-[12px] md:text-[16px]">Contact Us</a>
                </div>
            </footer>
        </>
    );
};

export default FooterLanding;