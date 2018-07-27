import * as React from 'react';

import IProps from "./IProps";

const Rank = (props: IProps) => {
    return (
        <div>
            <div className="white f3">
                {`${props.user.name}, you found this many faces...`}
            </div>
            <div className="white f1">
                {props.user.entries}
            </div>

        </div>
    );
};

export default Rank;