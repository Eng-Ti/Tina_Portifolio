import React from 'react'

const About = () => {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Tina
                        <br className="hidden lg:inline-block" /> Frontend Developer | Structural Engineer
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I am a passionate FrontEnd Developer with a knack for crafting captivating and
                        user-friendly websites. With expertise in HTML, CSS, JavaScript & React. I specialize
                        in creating immersive digital experiences that leave a lasting impression. My journey
                        as a FrontEnd Developer is incomplete without mentioning Stutern, they gave me an opportunity
                        and a scholarship to study what I know about web development. Thank you Stutern.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
                            Contact Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./coding3.svg"
                    />
                </div>
            </div>
        </section>
    );
}

export default About