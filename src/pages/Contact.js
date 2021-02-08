import React from 'react'

import githubImg from '../assets/github-logo.png'
import linkedinImg from '../assets/linkedin.png'
import emailImg from '../assets/email.png'

import {
  TestimoniesWrapper,
  SignTitle,
  Container,
  AboutP,
  AboutSubTitle,
  ContactImg,
  LogosWrapper
} from '../styles/Styles'

export const Contact = () => {
  return (
    <TestimoniesWrapper>
      <Container>
        <SignTitle>
          Get in touch
        </SignTitle>
        <AboutP>
          This is an open source project created with the hope of helping in sharing
          experienced miscarriage testimonies. It was created (although it will never be
          finished and will be updated indefinitely) as the final project of the Technigo
          front-end developer boot camp.
        </AboutP>

        <AboutP> I am happy to answer questions or request, please contact me
        below <span role="img" aria-label="happy face">😊</span>
        </AboutP>
        <LogosWrapper>
          <a href="https://github.com/idsintehittapa">
            <ContactImg src={githubImg} alt="Github Logo" />
          </a>
          <a href="https://linkedin.com/in/johanna-blom-2419a181/">
            <ContactImg src={linkedinImg} alt="LinkedIn Logo" />
          </a>
          <a href="mailto:blomjoha@gmail.com">
            <ContactImg src={emailImg} alt="Email symbol" />
          </a>
        </LogosWrapper>
        <SignTitle>
          Want to contribute?
        </SignTitle>
        <AboutP> First of all, thank you for considering to contribute to this project!
        </AboutP>

        <AboutSubTitle>
        Spreading the word
        </AboutSubTitle>
        <AboutP> Even if you aren’t in the position that you can contribute your time to
          this project, it still helpful if you spread the word about the project.
          It could be just a short notice in social media or a discussion you have
          with your friends. As more people become aware of the project there’s a
          better chance that we reach people who are able to contribute or share testimonies.
        </AboutP>
        <AboutSubTitle>
        Suggesting new features
        </AboutSubTitle>
        <AboutP>
        It could be that you are aware of something that would be great
        to have and feature requests is always welcome.
        Make sure you explain in what scenario your suggested feature would be useful.
        </AboutP>
        <AboutSubTitle>
        Reporting bugs
        </AboutSubTitle>
        <AboutP>
        When you are <a href="https://github.com/idsintehittapa/my-miscarriage/issues">reporting bugs</a>, make sure that you give a explanation
        about the outcome that you expect and what you are seeing.
        The bugs which are hardest to fix are the ones which cannot be reproduced.
        </AboutP>
      </Container>
    </TestimoniesWrapper>
  )
}