import {useRouteError} from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    return (
        <div>Error page
             <h>{err.status}</h>
              <h>{err.statusText}</h>
        </div>
    )
}

export default Error;