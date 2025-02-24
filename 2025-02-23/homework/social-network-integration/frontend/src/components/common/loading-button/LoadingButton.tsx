import './LoadingButton.css'
import loadingImageSource from '../../../assets/images/loading.webp'

interface LoadingButtonProps {
    isSubmitting: boolean,
    buttonText: string,
    loadingText: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}
export default function LoadingButton(props: LoadingButtonProps): JSX.Element {

    const {
        isSubmitting,
        buttonText,
        loadingText,
        onClick,
    } = props

    return (
        <>
            {!isSubmitting && <button onClick={onClick}>{buttonText}</button>}
            {isSubmitting && <p>{loadingText}... <i><img id='imageLoading' src={loadingImageSource}/></i></p>}
        </>
    )
}