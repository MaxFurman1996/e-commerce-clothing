import React from 'react';

import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';
import { MenuItemContainer, BackgroundImageContainer, ContentContainer, ContentTitle, ContentSubtitle } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, imageSize, match, history, linkUrl}) => (
    <MenuItemContainer 
        imageSize={imageSize} 
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <BackgroundImageContainer 
            className='background-image' 
            imageUrl={imageUrl} 
        />
        <ContentContainer>
            <ContentTitle>{title.toUpperCase()}</ContentTitle>
            <ContentSubtitle>SHOP NOW</ContentSubtitle>
        </ContentContainer>
    </MenuItemContainer>
)

export default withRouter(MenuItem);