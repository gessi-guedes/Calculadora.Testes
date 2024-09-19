import * as styles from './styles'

export default function Display({ tela }) {
    return <>
        <styles.StyledContainer>
            <styles.StyledText>{tela}</styles.StyledText>
        </styles.StyledContainer>
    </>
}
    