import Appbar from "components/Appbar/Appbar";
import { Outlet } from "react-router-dom";
import { Suspense } from 'react';


const Loyaut = () => {
    return (
       <> <Appbar />
        <Suspense>
        <Outlet />
        </Suspense>
        </>
    );
};
export default Loyaut;