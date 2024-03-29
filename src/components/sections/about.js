// import React, { useEffect, useRef } from 'react';
// import { StaticImage } from 'gatsby-plugin-image';
// import styled from 'styled-components';
// import { srConfig } from '@config';
// import sr from '@utils/sr';
// import { usePrefersReducedMotion } from '@hooks';

// const StyledAboutSection = styled.section`
//   max-width: 900px;

//   .inner {
//     display: grid;
//     grid-template-columns: 3fr 2fr;
//     grid-gap: 50px;

//     @media (max-width: 768px) {
//       display: block;
//     }
//   }
// `;
// const StyledText = styled.div`
//   ul.skills-list {
//     display: grid;
//     grid-template-columns: repeat(2, minmax(140px, 200px));
//     grid-gap: 0 10px;
//     padding: 0;
//     margin: 20px 0 0 0;
//     overflow: hidden;
//     list-style: none;
//     color: rgb(0, 210, 300);

//     li {
//       position: relative;
//       margin-bottom: 10px;
//       padding-left: 20px;
//       font-family: var(--font-mono);
//       font-size: var(--fz-xs);

//       &:before {
//         content: '▹';
//         position: absolute;
//         left: 0;
//         color: var(--blue);
//         font-size: var(--fz-sm);
//         line-height: 12px;
//       }
//     }
//   }
// `;
// const StyledPic = styled.div`
//   position: relative;
//   max-width: 300px;

//   @media (max-width: 768px) {
//     margin: 50px auto 0;
//     width: 70%;
//   }

//   .wrapper {
//     ${({ theme }) => theme.mixins.boxShadow};
//     display: block;
//     position: relative;
//     width: 100%;
//     border-radius: var(--border-radius);
//     background-color: var(--green);

//     &:hover,
//     &:focus {
//       outline: 0;

//       &:after {
//         top: 15px;
//         left: 15px;
//       }

//       .img {
//         filter: none;
//         mix-blend-mode: normal;
//       }
//     }

//     .img {
//       position: relative;
//       border-radius: var(--border-radius);
//       mix-blend-mode: multiply;
//       filter: grayscale(100%) contrast(1);
//       transition: var(--transition);
//     }

//     &:before,
//     &:after {
//       content: '';
//       display: block;
//       position: absolute;
//       width: 100%;
//       height: 100%;
//       border-radius: var(--border-radius);
//       transition: var(--transition);
//     }

//     &:before {
//       top: 0;
//       left: 0;
//       background-color: var(--navy);
//       mix-blend-mode: screen;
//     }

//     &:after {
//       border: 2px solid var(--green);
//       top: 20px;
//       left: 20px;
//       z-index: -1;
//     }
//   }
// `;

// const About = () => {
//   const revealContainer = useRef(null);
//   const prefersReducedMotion = usePrefersReducedMotion();

//   useEffect(() => {
//     if (prefersReducedMotion) {
//       return;
//     }

//     sr.reveal(revealContainer.current, srConfig());
//   }, []);

//   const skills = [
//     'Data Analytics',
//     'Machine Learning',
//     'Deep Learning',
//     'Image Processing',
//     'Medical Image Processing',
//     'SCRUM & Agile',
//   ];
//   const frameworks = [
//     'Python',
//     'C++',
//     'Java',
//     'SQL & NoSQL',
//     'PyTorch',
//     'TensorFlow & Keras',
//     'MATLAB',
//     'NLTK',
//     'HuggingFace',
//     'SciPy',
//     'SAS',
//     'AWS',
//     'PyDicom',
//     'NiBabel',
//   ];

//   return (
//     <StyledAboutSection id="about" ref={revealContainer}>
//       <h2 className="numbered-heading">About Me</h2>

//       <div className="inner">
//         <StyledText>
//           <div>
//             <p>
//               I'm a Computer Engineer from India with experience in Machine Learning, Software
//               Engineering and Data Analytics.
//               <br></br>
//               <br></br>I have recently completed my Masters degree in Artificial Intelligence and
//               Adaptive Systems from the University of Sussex, United Kingdom.
//             </p>

//             <p>Here are a few technologies I’ve been working with recently:</p>
//           </div>
//           <ul className="skills-list">
//             {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
//           </ul>
//           <br></br>
//           <p>These are the programming languages and frameworks known by me.</p>
//           <ul className="skills-list">
//             {frameworks && frameworks.map((skill, i) => <li key={i}>{skill}</li>)}
//           </ul>
//         </StyledText>

//         <StyledPic>
//           <div className="wrapper">
//             <StaticImage
//               className="img"
//               src="../../images/me.jpg"
//               width={500}
//               quality={95}
//               formats={['AUTO', 'WEBP', 'AVIF']}
//               alt="Headshot"
//             />
//           </div>
//         </StyledPic>
//       </div>
//     </StyledAboutSection>
//   );
// };

// export default About;

import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    color: rgb(0, 210, 300);

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--blue);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);
  const skills = [
    'Anomaly Detection',
    'Deep Learning',
    'Computer Vision',
    'Natural Language Processing',
    '3D image reconstruction',
    'Medical Image Processing',
    'SCRUM & Agile',
    'Data Science',
  ];
  const programming_lang = [
    'Python',
    'C++',
    'Java',
    'SQL & NoSQL',
    'PyTorch',
    'TensorFlow & Keras',
    'NLTK',
    'SciPy',
    'PyDicom',
    'NiBabel',
  ];
  const frameworks_ = ['Dockers', 'MATLAB', 'SAS', 'AWS (EC2 & Lambda)'];
  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              I'm a Tech enthusiast with a passion for solving complex problems using cutting-edge
              technologies. With a background in Computer Engineering, I have gained extensive
              experience in Machine Learning, Software Engineering, and Data Analytics. Recently, I
              completed my Masters degree in Artificial Intelligence and Adaptive Systems from the
              University of Sussex, United Kingdom.
              <br></br>
              <br></br>
              My ultimate goal is to use my skills and knowledge to make a significant impact on
              society, and I am excited to explore new opportunities that allow me to do so.
            </p>

            <p>Here are a few technological areas I've worked in:</p>
          </div>
          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
          <br></br>
          <p>Programming languages and libraries known by me.</p>
          <ul className="skills-list">
            {programming_lang && programming_lang.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>

          <br></br>
          <p>Frameworks I've worked with:</p>
          <ul className="skills-list">
            {frameworks_ && frameworks_.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
