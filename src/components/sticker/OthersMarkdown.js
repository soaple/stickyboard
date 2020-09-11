import React, { useState } from 'react';
import { Markdown } from '@stickyboard/markdown';

function OthersMarkdown(props) {
    const [content, setContent] = useState(
        '# This is markdown component\n## StickyBoard is very cool!\n### Start using create-stickyboard-app\n```$ npx create-stickyboard-app my-stickyboard```'
    );

    return (
        <Markdown
            editable
            content={content}
            onSave={(content) => {
                setContent(content);
            }}
        />
    );
}

export default OthersMarkdown;
