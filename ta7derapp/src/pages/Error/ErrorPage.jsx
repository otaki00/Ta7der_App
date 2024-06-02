import { Link } from 'react-router-dom';
import { useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const { error } = useRouteError();

    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
            <h1 className="text-6xl font-bold text-red-500 mb-4">Oops!</h1>
            <p className="text-2xl mb-2">Sorry, an unexpected error has occurred.</p>
            {/* for error status code */}
            <p className="text-lg text-gray-500">
                <i>{error.statusCode}</i>
            </p>
            <p className="text-lg text-gray-500">
                <i>{error.statusText || error.message}</i>
            </p>
            
            <Link to="/" className="text-blue-500 hover:underline mt-4">Go back to home</Link>
        </div>
    );
};

export default ErrorPage;