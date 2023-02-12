import React from 'react'
import CookingMenu from './cookingmenu';
import Timer from './timer';
// UserSelectで選択したユーザ名の独自ホーム画面の生成

const UsserHome = () => {
    return (
        <div>
            <h2>UserHome</h2>
            {/* <CookingTimer /> */}
            <Timer duration={10} shouldRepeat={true} delay={0.3} />
            <CookingMenu />
        </div>
    )
}

export default UsserHome