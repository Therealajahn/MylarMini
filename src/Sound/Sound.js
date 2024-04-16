import Kick from './Kick/Kick.js';
import ErrorBoundary from '../Utilities/ErrorBoundary/ErrorBoundary.js';

export default function Sound() {
    return(
        <ErrorBoundary>
            <Kick data-testid='kick in sound'/>
        </ErrorBoundary>
    )
}
