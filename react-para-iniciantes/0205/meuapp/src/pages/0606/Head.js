import React from "react";

function Head(props) {
  React.useEffect(() => {
    document.title = "React Completo | " + props.title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", props.content);
  }, [props.content, props.title]);

  return <></>;
}

export default Head;
