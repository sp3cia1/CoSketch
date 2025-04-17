"use client"

import { EmptyBoards } from "./empty-boards";
import { EmptyFavourites } from "./empty-favorites";
import { EmptySearch } from "./empty-search";

type BoardListProps = {
    orgId: string;
    query: {
      search?: string;
      favorites?: string;
    };
};

export const BoardList = ({query}: BoardListProps) => {

    const data = []

    if(!data?.length && query.search){
        return <EmptySearch/>
    }

    if(!data?.length && query.favorites){
        return <EmptyFavourites/>
    }

    if (!data?.length) {
        return <EmptyBoards/>
    }

    return(
        <>hi</>
    )

}