import { BackgroundBox, QuoteAuthor, QuoteDivider, QuoteTitle } from "./styles"

export const QuoteSection = ({ background, text, author, authorLogo, textStyle }) => (
    <BackgroundBox backgroundImg={background}>
        <QuoteTitle variant={textStyle}>{text}</QuoteTitle>
        {author && (
            <>
            <QuoteDivider variant="middle" />
            <QuoteAuthor variant="body1">
                {author}
                {authorLogo &&
                    <img src={authorLogo} alt="author-logo" />}
            </QuoteAuthor>
            </>
        )}
    </BackgroundBox>
)