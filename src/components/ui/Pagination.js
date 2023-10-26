"use client";

import { useState } from "react";
import { Pagination as NextUiPagination } from "@nextui-org/react";


const Pagination = () => {

    const [currentPage, setCurrentPage] = useState(1);


    return (
        <NextUiPagination
            classNames={{
                cursor: 'bg-gradient-to-br from-blue-500 to-fuchsia-500'
            }}
            variant='bordered'
            page={currentPage}
            onChange={setCurrentPage}
            total={250}
        />
    );
};


export default Pagination;