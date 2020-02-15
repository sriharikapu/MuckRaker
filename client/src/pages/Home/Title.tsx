import React, { ReactNode } from 'react'

type IProps = {
    top: string,
    bottom: string,
    fontSize: number,
}


const Title: React.FC<IProps> = ({ fontSize, top, bottom }) => {
    return (<>
        <div style={{ fontSize, fontFamily: 'Raleway' }}>
            {top}
        </div>
        <div style={{ fontSize, fontFamily: 'Raleway' }}>
            {bottom}
        </div>
    </>
    )
}

export default Title;