import { createContext, useState } from "react";

interface ContextType {
    changeDataScreenVisible: boolean,
    setChangeDataScreenVisible: (changeDataScreenVisible: boolean) => void;
}

export const ChangeDataScreenVisibleContext = createContext<ContextType>({
    changeDataScreenVisible: false,
    setChangeDataScreenVisible: () => { }
})
ChangeDataScreenVisibleContext.displayName = 'ChangeValueContext'
interface Props {
    children: React.ReactNode
}
export const ChangeDataScreenVisibleContextProvider = ({ children }: Props) => {
    const [changeDataScreenVisible, setChangeDataScreenVisible] = useState(false)
    return (
        <ChangeDataScreenVisibleContext.Provider value={{ changeDataScreenVisible, setChangeDataScreenVisible }}>
            {children}
        </ChangeDataScreenVisibleContext.Provider>
    )
}