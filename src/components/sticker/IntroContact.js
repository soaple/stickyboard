import React from 'react';
import { Textfit } from 'react-textfit';

function IntroContact(props) {
    const { colors } = props;

    return (
        <div style={{ width: '100%', height: '100%', padding: 8 }}>
            <Textfit
                mode="multi"
                min={16}
                max={200}
                forceSingleModeWidth={false}
                style={{ height: '40%', padding: 8 }}>
                Visit our Github page!
            </Textfit>
            <div style={{ height: '60%', textAlign: 'center' }}>
                <div>
                    <iframe
                        src="https://ghbtns.com/github-btn.html?user=soaple&repo=stickyboard&type=star&count=true&size=large"
                        frameBorder="0"
                        scrolling="0"
                        width="160px"
                        height="30px"
                    />
                </div>
                <br />
                <div>
                    <iframe
                        src="https://ghbtns.com/github-btn.html?user=soaple&type=follow&count=true&size=large"
                        frameBorder="0"
                        scrolling="0"
                        width="160px"
                        height="30px"
                    />
                </div>
            </div>
        </div>
    );
}

export default IntroContact;
