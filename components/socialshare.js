// components/SocialMediaShare.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faLinkedin,
  faTwitter /* Add other social media icons as needed */,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
const domain = "https://www.skillsculptures.com";
const SocialShare = ({ articleTitle, articleSlug }) => {
  const articleUrl = `${domain}/post/${articleSlug}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    articleUrl
  )}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    articleUrl
  )}&text=${encodeURIComponent(articleTitle)}`;
  const linkedinShareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
    articleUrl
  )}&title=${encodeURIComponent(articleTitle)}`;
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `${articleTitle} - ${articleUrl}`
  )}`;

  return (
    <>
      <a
        title="Share on Linkedin"
        className="m-2 inline-block w-6 "
        href={linkedinShareUrl}
        target="_blank"
        rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} color="grey" />
      </a>
      <a
        title="Share on Twitter"
        className="m-2 inline-block w-6"
        href={twitterShareUrl}
        target="_blank"
        rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} color="grey" />
      </a>
      <a
        title="Share on Facebook"
        className="m-2 inline-block w-6"
        href={facebookShareUrl}
        target="_blank"
        rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} color="grey" />
      </a>
      <a
        title="Share on Whatsapp"
        className="m-2 inline-block w-6"
        href={whatsappShareUrl}
        target="_blank"
        rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} color="grey" />
      </a>
      {/* Add other social media share links with corresponding icons */}
    </>
  );
};

export default SocialShare;
