import {ReactElement} from 'react';
import {SampleStyle} from './style';
import {Stuff} from '@app/interfaces';
import {WithChildren} from '@app/helper';

function Sample({children, ...stuff}: SampleProps): ReactElement {
    const getKeys = () => Object.entries(stuff);
    return (
        <SampleStyle>
            {getKeys().map(([key, value]) => (
                <span key={key}>{`${key} - ${value}`}</span>
            ))}
            {children}
        </SampleStyle>
    );
}

export type SampleProps = WithChildren<Stuff>;

/**
 * Default Props Sample
 */
Sample.defaultProps = {
    name: 'ALAN',
};

export default Sample;
