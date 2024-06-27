import React, { createContext, useState, useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch("/checkAuth", {
                    method: "GET",
                    credentials: "include",
                });
                const data = await response.json();
                if (data.status === "success") {
                    setUserId(data.data.userId);
                } else {
                    setUserId(null);
                }
            } catch (error) {
                console.error(error);
                setUserId(null);
            }
        };

        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ userId, setUserId }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };
