import React from "react";

//props children qui contient le mdp
//state showPassword set SetShowPassword
//label html
//input type checkbox
//onchange SetShowPassword
//ternaire pour affichage password

const HidePassword = ({ children }) => {
  const [showPassword, SetShowPassword] = React.useState(false);
  return (
    <div>
      <label htmlFor="toggleMdp">afficher mdp</label>
      <input
        id="toggleMdp"
        type="checkbox"
        checked={showPassword}
        onChange={(e) => SetShowPassword(e.target.checked)}
      />
      {showPassword ? children : null}
    </div>
  );
};

export default HidePassword;
