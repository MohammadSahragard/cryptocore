'use client';

import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//* components
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/modal';
import { Button } from '@nextui-org/react';
import { Input } from '@nextui-org/input';
import Title from '@/components/ui/Title';

//* actions
import { changeTargetCurrency } from '@/redux/features/global-options/optionsSlice';


//* fetch data (global market info (coingecko api))
const getData = async () => {
    const res = await fetch('https://currencies-db.vercel.app/data');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    };

    return res.json();
}


const SelectTargetCurrency = ({ isTransparent }) => {

    const dispatch = useDispatch();
    const targetCurrency = useSelector(state => state.options.targetCurrency);

    const searchInputRef = useRef();

    // states
    const [data, setData] = useState({});
    const [searchedValue, setSearchedValue] = useState('');
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const searchedCurrencies = data?.currencies?.filter(currency => currency.code.toLowerCase().includes(searchedValue.toLowerCase()));

    // functions
    const openChange = () => {
        setSearchedValue('');
        onOpenChange();
    };


    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setData(data);
        };

        fetchData();
    }, []);



    return (
        <>
            <Button
                onPress={onOpen}
                size='sm'
                className={isTransparent ? 'bg-transparent' : undefined}
            >
                <i className='fad fa-money-bill'></i>
                <span>{targetCurrency?.code?.toUpperCase()}</span>
                <i className='far fa-angle-down'></i>
            </Button>

            <Modal
                isOpen={isOpen}
                onOpenChange={openChange}
                className='bg-background border border-default-300'
                radius='sm'
                backdrop='blur'
                placement='center'
                hideCloseButton={true}
                scrollBehavior='inside'
                size='3xl'
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className='border-b border-default-300 p-0'>
                                <Input
                                    startContent={<i className='far fa-search'></i>}
                                    radius='sm'
                                    placeholder='Search currency'
                                    value={searchedValue}
                                    onChange={e => setSearchedValue(e.target.value)}
                                    classNames={{
                                        inputWrapper: 'h-10 w-full bg-transparent text-foreground'
                                    }}
                                    ref={searchInputRef}
                                />
                            </ModalHeader>

                            <ModalBody className='border-b border-default-300'>
                                {
                                    data?.currenciesCategory?.map(category =>
                                        <div key={category} className='gird gird-rows-[35px_auto] space-y-2 p-2'>
                                            <div>
                                                <Title>{category.split('_').join(' ')}</Title>
                                            </div>
                                            <div className='grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-2'>
                                                {
                                                    searchedCurrencies.filter(currencyTitle => currencyTitle.category === category).map(currency =>
                                                        <Button
                                                            key={currency.code}
                                                            variant='bordered'
                                                            color={currency.code === targetCurrency?.code ? 'primary' : 'default'}
                                                            onClick={() => {
                                                                dispatch(changeTargetCurrency({ code: currency.code, symbol: currency.symbol }));
                                                                setTimeout(() => onClose(), 300);
                                                            }}
                                                        >
                                                            {currency.code.toUpperCase()}
                                                        </Button>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                            </ModalBody>

                            <ModalFooter className='p-2'>
                                <Button color='danger' size='sm' variant='light' onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};


export default SelectTargetCurrency;