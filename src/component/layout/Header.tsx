import React, {FC} from 'react';

interface HeaderProps {
    headerName: string,
}

const Header : FC<HeaderProps> = ({headerName}) => {
  return (
    <div>
        <h1>Header : {headerName}</h1>
    </div>
  )
}

export default Header