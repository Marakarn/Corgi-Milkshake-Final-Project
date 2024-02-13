import { NavLink } from "react-router-dom";

const MainLanding = () => {
    return (
        <>
            <main className="container mx-auto py-12 mb-8 flex justify-center">
                <h2 className="text-4xl font-bold mb-4 text-center text-[#8BCA00]">Start Your Fitness Journey Today</h2>
            </main>

            <section>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-center font-poppins">
                    <div className="rounded-lg overflow-hidden flex flex-col items-center justify-center">
                        <img
                            src="/calendar.png"
                            alt="calendar"
                            className="w-56 h-48 bg-left bg-no-repeat bg-origin-border bg-clip-border bg-contain"
                        />
                        <div className="mt-2">
                            <p className="text-center py-14 text-[#8BCA00] text-xl">Record your workout journey</p>
                        </div>
                    </div>

                    <div className="rounded-lg overflow-hidden flex flex-col items-center justify-center">
                        <img
                            src="/chart.png"
                            alt="chart"
                            className="w-56 h-48 bg-left bg-no-repeat bg-origin-border bg-clip-border bg-contain"
                        />
                        <div className="mt-2">
                            <p className="text-center py-14 text-[#8BCA00] text-xl">Tracking your progress</p>
                        </div>
                    </div>

                    <div className="rounded-lg overflow-hidden flex flex-col items-center justify-center">
                        <img
                            src="/rafiki.png"
                            alt="rafiki"
                            className="w-56 h-48 bg-left bg-no-repeat bg-origin-border bg-clip-border bg-contain"
                        />
                        <div className="mt-2">
                            <p className="text-center py-14 text-[#8BCA00] text-xl">A diversity of exercise modalities</p>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="flex flex-col items-center justify-center h-96 w-full bg-[#8BCA00] bg-cover bg-center p-8 text-white text-center font-poppins">
                    <h2 className="md:text-2xl md:m-80 md:p-60 leading-loose">Discover a healthier, happier you with <strong>GreenSculpt</strong>. <br />We offer a variety of workouts, personalized plans, and expert guidance to help you achieve your fitness goals.</h2>
                </div>
            </section>

            <section className="mb-60">
                <div className="container mx-auto py-12 flex justify-center items-center font-poppins flex-col text-center">
                    <p className="text-3xl font-bold text-[#8BCA00]">Join GreenSculpt Today</p>
                    <p className="md:text-2xl font-bold py-8 text-center text-[#8BCA00] leading-loose md:px-40 md:mx-60">Unlock exclusive access to premium features and personalized workout plans. Sign up now and take the first step towards a healthier lifestyle.</p>
                    <div className="md:w-1/5">
                        <NavLink to="/signup">
                            <button className="btn bg-[#d2fe71] hover:bg-[#a5cf4a]/80 w-full drop-shadow text-xl font-normal border-none">Sign Up</button>
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MainLanding;