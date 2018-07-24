import * as React from 'react';

import IProps from "./IProps";

const Rank = (props: IProps) => {
    return (
        <div>
            <div className="white f3">
                {props.user.name} {", your current entry count is..."}
            </div>
            <div className="white f1">
                {props.user.entries}
            </div>

        </div>
    );
};

export default Rank;