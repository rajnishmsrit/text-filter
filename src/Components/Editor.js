import React from 'react'
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/markdown';
import 'brace/theme/twilight';

const Editor = () => {
    return(
        <AceEditor
		    mode="markdown"
		    theme="twilight"
		    name="text-div-markdown"
		    editorProps={{$blockScrolling: true}}
		    fontSize="24px"
		    width="100%"
		    height="1000px"
		/>
    )
}
export default Editor;