import {useTypedSelector} from "./useTypedSelector";


export const useChats = () => useTypedSelector(state => state.contacts)