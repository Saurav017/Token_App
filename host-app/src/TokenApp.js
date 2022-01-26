import React, { useRef, useEffect } from 'react'

import mount from 'tokenA/tokenWrapper'

export default function TokenApp() {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
        console.log("Its working ....")
    }, []);

    return <div ref={ref} />;
}
