import * as Style from './style';

import {HTMLAttributes, ReactElement} from 'react';

import {WithChildren} from '@app/helper';

function FormField(props: FormFieldProps): ReactElement {
    return <Style.FormField {...props} />;
}

type FormFieldProps = WithChildren<HTMLAttributes<HTMLDivElement>>;

export default FormField;
