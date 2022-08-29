import { BackgroundBox, QuoteAuthor, QuoteDivider, QuoteTitle } from "./styles"

export const QuoteSection = ({ background, text, author, authorLogo }) => {
    return (
        <BackgroundBox backgroundImg={background}>
                <QuoteTitle variant="body1bold">"{text}"</QuoteTitle>
                <QuoteDivider variant="middle"/>
                <QuoteAuthor variant="body1">
                    {author} 
                    {authorLogo && 
                        <img src={authorLogo} alt="author-logo" />
                    }
                </QuoteAuthor>
        </BackgroundBox>
    )
}