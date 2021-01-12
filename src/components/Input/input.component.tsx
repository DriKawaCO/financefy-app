import * as Style from './style';

import {InputHTMLAttributes, ReactElement} from 'react';

import {WithChildren} from '@app/helper';

function Input(props?: InputProps): ReactElement {
    return <Style.Input {...props} />;
}

type InputProps = WithChildren<InputHTMLAttributes<HTMLInputElement>>;

export default Input;
