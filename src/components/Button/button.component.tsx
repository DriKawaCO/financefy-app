import * as Style from './style';

import {ButtonHTMLAttributes, HTMLProps, ReactElement} from 'react';

import {WithChildren} from '@app/helper';

function Button(props?: ButtonProps): ReactElement {
    return <Style.Button {...props} />;
}

type ButtonProps = WithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export default Button;
