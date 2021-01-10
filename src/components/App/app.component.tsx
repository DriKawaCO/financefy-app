import {AppStyle} from './style';
import {ReactElement} from 'react';
import {WithChildren} from '@app/helper';

function App({children}: AppProps): ReactElement {
    return <AppStyle>{children}</AppStyle>;
}

type AppProps = WithChildren<unknown>;

export default App;
