"use client";

import { useSelector, useDispatch } from "react-redux";
import { Pagination as NextUiPagination } from "@nextui-org/react";
//* actions
import { changeCurrenciesCurrentPage } from "@/redux/features/global-options/optionsSlice";


const Pagination = () => {

    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.options.currenciesCurrentPage);


    return (
        <NextUiPagination
            className='w-max'
            classNames={{
                cursor: 'bg-gradient-to-br from-blue-500 to-fuchsia-500'
            }}
            variant='bordered'
            page={currentPage}
            onChange={page => dispatch(changeCurrenciesCurrentPage(page))}
            total={107}
        />
    );
};


export default Pagination;