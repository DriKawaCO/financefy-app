import * as Style from './style';

import {AnchorHTMLAttributes, ReactElement} from 'react';

import {WithChildren} from '@app/helper';

function Link(props?: LinkProps): ReactElement {
    return <Style.Link {...props} />;
}

type LinkProps = WithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>;

export default Link;
