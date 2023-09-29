import img from './error.gif';

const ErrorMsg = () => {
    return (
        <img style={{display: 'block', width: '250px', height: '250px', objectFit: 'contains', margin: '0 auto'}} src={img} alt='error'/>
    )
}

export default ErrorMsg;