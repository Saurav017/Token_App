import React, { useRef, useEffect } from 'react'

import mount from 'tokenA/tokenWrapper'
// const mount = React.lazy(() => import("tokenA/tokenWrapper"))

export default function TokenApp() {


    console.log("Outer Function")
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
        console.log("Its working ....")
    }, []);

    return <div ref={ref} />;
}
