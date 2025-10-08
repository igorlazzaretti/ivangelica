import {
  FooterContainer,
  IconsWrapper,
  IconLink,
  SiteLink,
} from './styles.js'
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <FooterContainer>
      <IconsWrapper>
        <IconLink
          href="https://www.instagram.com/igor.lazzaretti/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={24} />
        </IconLink>

        <IconLink
          href="https://www.linkedin.com/in/igorlazzaretti/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </IconLink>
      </IconsWrapper>

      <SiteLink
        href="https://igorlazzaretti.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        igorlazzaretti.com
      </SiteLink>
    </FooterContainer>
  );
}
