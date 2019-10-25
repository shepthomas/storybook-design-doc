import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

/**
## General use

__Buttons are used primarily for actions__. Examples include Add, Save, Delete, and Sign up. Each page should have one primary button, and a Return or Enter keyboard event should trigger it. Any remaining calls-to-action should be represented as secondary buttons.

__Do not use buttons as navigational elements__. Instead, use links when the desired action is to take the user to a new page.

__Primary buttons always appear to the right__. Secondary buttons appear to the left of the primary button.

**/

function Button(props) {
  //  Vars
  const {children, onClick, disabled} = props

  //  Styles
  const ButtonComponent = styled.button`
    box-sizing: border-box;
    color: ${!disabled ? "#fff" : "#8d8d8d"};
    font-family: sans-serif;
    font-size:  14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.4px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    padding: 12px;
    transition: all 70ms cubic-bezier(0,0,.38,.9);
    outline: 1px solid transparent;
    outline-offset: -4px;
    position: relative;
    cursor: ${!disabled ? "pointer" : "not-allowed"};
    background-color: ${!disabled ? "#1157fe" : "#c6c6c6"};
    border: none;
    margin:  1rem;
    min-width: 120px;

    :hover {
      background-color: ${!disabled ? "#0353e9" : "#c6c6c6"};
    }

    :active  {
      background-color: #002d9c;
    }

    :focus {
      border-color: #0f62fe;
      outline-color: #fff;
    }

  `;

  //  Render
  return (
      <ButtonComponent onClick={onClick} disabled={disabled} >{children}</ButtonComponent>
  );
}

export default Button;


Button.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['primary','secondary']),
};

Button.defaultProps = {
  disabled: false,
  type: 'primary'
};
