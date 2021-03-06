import React from 'react'
import { Container, ExtraTitleContent, StyledArticle } from './styled';

const Article = ({ extraTitleContent, title, description, extraContent, image }) => (
    <StyledArticle>
        {image}
        <Container>
            <ExtraTitleContent>
                {extraTitleContent}
            </ExtraTitleContent>
            {title}
            {description}
            {extraContent}
        </Container>
    </StyledArticle>
);

export default Article;