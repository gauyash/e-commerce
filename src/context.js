import React,{useContext,createContext} from 'react'
import categoriesData from './data/categoriesData';
import productsData from './data/productsData';

const AppContext=createContext();

const contextValue={
    categoriesData,
    productsData
}

const AppProvider=({children})=>{
    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}

const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider,useGlobalContext}