import {ReactElement} from 'react';
import {Sample} from '@app/components';
import {Stuff} from '@app/interfaces';

function App(): ReactElement {
    const newStuff: Stuff = {
        id: '123',
        years: 22,
    };

    return (
        <>
            <Sample {...newStuff}>
                <h1>Jezz Christ</h1>
            </Sample>
        </>
    );
}

export default App;
