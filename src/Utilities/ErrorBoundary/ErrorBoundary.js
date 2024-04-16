import { useEffect, useState } from 'react';

export default ErrorBoundary({children}) {
    const [errorPresent,setErrorPresent] = useState(false);

    useEffect(() => {
        function handleError(error,errorInfo){
            console.error('Error caught by boundary:',error,errorInfo);
            setErrorPresent(true);
        }
    },[])

    return children;
};
