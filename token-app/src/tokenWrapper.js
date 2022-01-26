import ReactDOM from "react-dom";

import TokenGenerator from "./TokenGenerator";

export default function mount(el) {
    // ReactDOM.render(TokenGenerator, el)
    return ReactDOM.render(<TokenGenerator />, el);
}

