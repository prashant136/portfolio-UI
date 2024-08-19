import { ABOUT_SECTION_CARDS } from "../constants";

export default function About() {
    return (
        <section className='lg:hidden dark:bg-purple-mid w-full py-8'>
            <div className='relative max-w-[1920px] mx-auto flex flex-col text-white w-full lg:flex-row lg:space-x-4 lg:my-16'>
                <h2 className='text-2xl font-semibold mb-4 text-center dark:text-purple-light'>
                    About me:
                </h2>
                <div className='flex flex-col gap-y-4 lg:w-4/12 px-10'>
                    <span className='text-center font-normal px-10 text-[13px]'>
                        Hi, my name is Gaurav Sharma, i am a web developer , UI
                        designer, and Mobile developer. I have honed my skills
                        in Web Development and advance i have core understanding
                        of advance UI design principles. Here are the major
                        skiills i have.
                    </span>
                    <div className="flex gap-x-4">
                      <span className="dark:text-purple-light text-6xl font-bold">2+</span>  Years of experience. Specialised in building apps, while
                        ensuring a seamless web & app experience for end users.
                    </div>
                </div>
                <div className='flex flex-col items-center gap-y-8 p-6'>
                    {ABOUT_SECTION_CARDS.map((card, index) => {
                        return (
                            <div
                                key={index}
                                className='h-64 w-64 border-2 rounded-xl flex flex-col justify-evenly items-center'
                            >
                                <img
                                    src={card.icon}
                                    alt={"icon-alt"}
                                    width={50}
                                    height={50}
                                />
                                <span className="font-semibold">{card.text}</span>
                                <span className="text-xs font-semibold px-6">{card.description}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
