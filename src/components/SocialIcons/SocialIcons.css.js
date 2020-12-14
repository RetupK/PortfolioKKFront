import styled from "styled-components";
import {FaFacebook, FaTwitter, FaGithub} from "react-icons/fa";
import {RiGoogleLine} from "react-icons/ri";
import {AiFillLinkedin} from "react-icons/ai";

export const SocialContainer = styled.div`
    display: flex;
    padding: 20px 36px;
    align-items: center;
`

export const SocialText = styled.div`
    margin: 0px 0px 10px 0px;
    position: relative;
    left: 10px;
    font-weight: bold;
`

export const SocialIconsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
`

export const SingleIconFbWrapper = styled.div`
    width: 40px;
    height: 40px;
    cursor: pointer;
    margin: 0px 7px;
`

export const FacebookIcon = styled(FaFacebook)`
    position: relative;
    left: 8px;
    height: 100%;
    font-size: 25px;
    color: white;
`

export const SingleIconGoogleWrapper = styled(SingleIconFbWrapper)`
    color: #f1556c;
`

export const SingleIconLinkedInWrapper = styled(SingleIconFbWrapper)`
    display: flex;
`

export const IconLinkedIn = styled(AiFillLinkedin)`
    position: relative;
    left: 8px;
    height: 100%;
    font-size: 25px;
    color: white;
`

export const GoogleIcon = styled(RiGoogleLine)`
    position: relative;
    left: 8px;
    height: 100%;
    font-size: 25px;
    color: white;
`

export const SingleIconTwitterWrapper = styled(SingleIconFbWrapper)`
    color: #37cde6
`

export const TwitterIcon = styled(FaTwitter)`
    position: relative;
    left: 8px;
    height: 100%;
    font-size: 25px;
    color: white;
`

export const SingleIconGithubWrapper = styled(SingleIconFbWrapper)`
    color: #6c757d;
`

export const GithubIcon = styled(FaGithub)`
    position: relative;
    left: 8px;
    height: 100%;
    font-size: 20px;
    color: white;
`
