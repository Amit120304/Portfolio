import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
      <section
          id="about"
          className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-20 font-sans mt-[-54px]"
      >
        <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full max-w-6xl mx-auto gap-8 md:gap-16">
          {/* Left Side - Text Content */}
          <div className="md:w-1/2 flex flex-col justify-between h-full text-center md:text-left">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                Hi, I am
              </h1>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Amitesh Sahoo
              </h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-[#8245ec] leading-tight">
                <span className="text-white">I am a </span>
                <ReactTypingEffect
                    text={[
                      'Fullstack Developer',
                      'Competitive Coder',
                    ]}
                    speed={100}
                    eraseSpeed={50}
                    typingDelay={500}
                    eraseDelay={2000}
                    cursorRenderer={(cursor) => (
                        <span className="text-[#8245ec]">{cursor}</span>
                    )}
                />
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
                As a Computer Science undergraduate with expertise across the MERN stack and AI integration, I architected real-time games and chat apps, plus Gen-AI agents and RAG solutions. I'm a knight on LeetCode, 3-star on CodeChef, and a Pupil on Codeforces. Top-tier JEE Main and Advanced ranks of 3738 and 8230 respectively affirm my algorithmic skills and problem-solving under pressure. Eager to learn, I'm ready to contribute to your team.
              </p>
            </div>
            {/* Resume Button */}
            <div className="mb-6 md:mb-0">
              <a
                  href="https://drive.google.com/file/d/16oLVL6zOdufCLernsgLUti-aS3yG3_yJ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white py-4 px-12 rounded-full text-xl font-bold transition-transform duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                    boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                  }}
              >
                DOWNLOAD CV
              </a>
            </div>
          </div>
          {/* Right Side - Profile Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <Tilt
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem] border-4 border-purple-700 rounded-full"
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                perspective={1000}
                scale={1.07}
                transitionSpeed={1000}
                gyroscope={true}
            >
              <img
                  src={profileImage}
                  alt="Amitesh Sahoo"
                  className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
              />
            </Tilt>
          </div>
        </div>
      </section>
  );
};

export default About;
