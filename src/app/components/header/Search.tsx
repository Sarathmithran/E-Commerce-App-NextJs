"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";

const Search = () => {

  const router = useRouter();

  const handleInputChange = (searchText:string) => {
    if(searchText === ''){
      router.replace(`/products`);
    }else{
      router.replace(`/products?search=${searchText}`);
    }
  };

  return (
    <>
        <form className="d-flex search-box ms-5 me-5" role="search">
            <input 
            className={"form-control me-2"}
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              handleInputChange(e.target.value);
            }}/>
            <button className="btn btn-outline-light" type="submit">Search</button>
        </form>
    </>
  )
}

export default Search