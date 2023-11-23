import Link from 'next/link';


const NotFound = () => {
    return (
        <div className='fixed inset-0 bg-background/50 backdrop-blur-lg'>
            <h2>Not Found</h2>
            <p>Could not find requested resource mohammad</p>
            <Link href="/">Return Home</Link>
        </div>
    );
};


export default NotFound;