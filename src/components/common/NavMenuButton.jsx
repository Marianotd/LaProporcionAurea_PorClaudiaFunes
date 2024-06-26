import React, { useEffect } from 'react'

export default function NavMenuButton({ state, setter }) {
    return (
        <div className="header__button">
            <input
                type="checkbox"
                id="activador"
                checked={state}
                onChange={() => setter(!state)}
            />
            <label htmlFor="activador">
                <span className="header__button--line"></span>
                <span className="header__button--line"></span>
                <span className="header__button--line"></span>
            </label>
        </div>
    )
}
