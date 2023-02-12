import { useState } from "react";

function Form() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>
        Input value is: <span className="text-red">{text}</span>
      </p>

      <button onClick={() => setText("")}>Clear</button>
    </div>
  );
}

export default Form;
