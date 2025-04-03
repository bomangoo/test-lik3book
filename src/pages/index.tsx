import styled from '@emotion/styled';

export default function Company() {
    return (
        <StyledWrapper>
            <video src="static/likebook.mp4" autoPlay muted playsInline loop />
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #000;
    text-align: center;

    > video {
        height: 100%;
        object-fit: contain;
    }
`;
