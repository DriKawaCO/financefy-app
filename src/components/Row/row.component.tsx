import * as Style from './style';

import {HTMLAttributes, ReactElement} from 'react';

import {WithChildren} from '@app/helper';

function Row(props: RowProps): ReactElement {
    return <Style.Row {...props} />;
}

type RowProps = WithChildren<HTMLAttributes<HTMLDivElement>>;

export default Row;
