import { Box } from "@mui/material"
import { BackgroundBox, QuoteAuthor, QuoteDivider, QuoteTitle } from "./styles"

export const QuoteSection = ({ background, text, author, authorLogo, textStyle, children }) => (
    <BackgroundBox backgroundImg={background}>
        <QuoteTitle variant={textStyle}>{text}</QuoteTitle>
        {children && <Box textAlign="center">
            {children}
        </Box>}
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