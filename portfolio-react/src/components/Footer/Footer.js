import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'
import { Button} from '../../globalStyles'
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebsiteRights,
    Socialcons,
    SocialIconLink
} from './Footer.elements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to reveive te latest news and trends.
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe anytime.
                </FooterSubText>

                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email" />
                        <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>


            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>Contact</FooterLink>
                        <FooterLink to='/'>Support</FooterLink>
                        <FooterLink to='/'>Destinations</FooterLink>
                        <FooterLink to='/'>Sponsorships</FooterLink>
                    </FooterLinksItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/sign-up'>Submit Video</FooterLink>
                        <FooterLink to='/'>Ambasadoors</FooterLink>
                        <FooterLink to='/'>Agency</FooterLink>
                        <FooterLink to='/'>Influencer</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTitle>Social Meidia</FooterLinkTitle>
                        <FooterLink to='/sign-up'>Facebook</FooterLink>
                        <FooterLink to='/'>Instagram</FooterLink>
                        <FooterLink to='/'>Twitter</FooterLink>
                        <FooterLink to='/'>Youtube</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>


            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon/>
                        Cole`Site
                    </SocialLogo>

                <WebsiteRights>Cole`Site © 2020</WebsiteRights>
                    
                <Socialcons>
                    <SocialIconLink href="/" target="_blank" aria-label="Facebook"> 
                    <FaFacebook />
                    </SocialIconLink>

                    <SocialIconLink href="/" target="_blank" aria-label="Instagram"> 
                    <FaInstagram/>
                    </SocialIconLink>

                    <SocialIconLink href="/" target="_blank" aria-label="Twitter"> 
                    <FaTwitter/>
                    </SocialIconLink>

                    <SocialIconLink href="/" target="_blank" aria-label="Youtube"> 
                    <FaYoutube/>
                    </SocialIconLink>
                    
                </Socialcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
