import React from "react";

function SuperComponent({ children }) {
  const [showMessage, setShowMessage] = React.useState(false);
  return (
    <div>
      <label htmlFor="toggle">Mon super composant</label>
      <input
        type="checkbox"
        id="toggle"
        checked={showMessage}
        onChange={(e) => setShowMessage(e.target.value)}
      />
      {showMessage ? children : null}
    </div>
  );
}

export default SuperComponent;
