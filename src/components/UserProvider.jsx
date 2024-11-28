import { UserContext } from "../contexts/UserContext";
import { useState } from "react";

const UserProvider = ({ Children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {Children}
    </UserContext.Provider>
  );
};

export default UserProvider;