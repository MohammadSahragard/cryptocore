'use client';

import { useState } from 'react';

//* components
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/modal';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import Searchbar from './Searchbar';


const SearchbarModal = () => {
    
    const [targetCurrency, setTargetCurrency] = useState('USD');
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    return (
        <>
            <Button
                onPress={onOpen}
                size='sm'
                isIconOnly
            >
                <i className='far fa-search'></i>
            </Button>

            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                radius='sm'
                backdrop='blur'
                placement='center'
                hideCloseButton={true}
                className='h-3/5 bg-background border border-default-300 text-foreground'
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody className='relative border-b border-default-300 p-0 h-3/4'>
                                <Searchbar />
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


export default SearchbarModal;