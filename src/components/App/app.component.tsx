import {WithChildren} from '@app/helper';
import {PageRoute} from '@app/interfaces';
import {ReactElement} from 'react';
import {AppStyle} from './style';

function App({children}: AppProps): ReactElement {
    return <AppStyle>{children}</AppStyle>;
}

type AppProps = WithChildren<{}>;

export default App;
