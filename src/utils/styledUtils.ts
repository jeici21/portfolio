import styled from "styled-components";

export const FadeInDiv = styled.div<{ visibility: string }>`
    transform: ${props => props.visibility === 'true' ? 'none' : 'translateY(10vh)'};
    transition: opacity 0.6s ease-out, transform 1.2s ease-out;
    will-change: opacity, visibility;
`