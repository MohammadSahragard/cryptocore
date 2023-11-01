'use client'; // Error components must be Client Components

// public
import { useEffect } from 'react';

//* components
import Button from '@/components/ui/Button';
import Title from '@/components/ui/Title';
import Subtitle from '@/components/ui/Subtitle';


export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error]);

  return (
    <div className='absolute bg-background/40 backdrop-blur-lg inset-0 flex flex-col items-center justify-center text-foreground z-30'>
      <Title>Something went wrong!</Title>
      <Subtitle customClassName='mb-5'>Please try again later.</Subtitle>
      <Button
        customColor='danger'
        customVariant='flat'
        clickEvent={
          () => window.location.reload()
        }
      >
        Try again
      </Button>
    </div>
  );
};