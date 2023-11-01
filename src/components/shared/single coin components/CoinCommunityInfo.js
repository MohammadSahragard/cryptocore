//* helper
import { getMainLink } from '@/helper/functions';

//* components
import Link from 'next/link';
import Title from '@/components/ui/Title';
import Badge from '@/components/ui/Badge';




const CoinCommunityInfo = ({ data }) => {
    const { links } = data;

    return (
        <div>
            <Title>Info</Title>

            <div className='flex flex-col divide-y divide-default-300'>

                <div className='grid grid-cols-[75px_auto] gap-2 py-2'>
                    <Title customClassName='font-normal text-opacity-75'>Website</Title>
                    <div className='flex justify-end flex-wrap gap-1'>
                        <Link href={links?.homepage?.[0]}>
                            <Badge>
                                {getMainLink(links?.homepage?.[0])}
                            </Badge>
                        </Link>
                    </div>
                </div>

                <div className='grid grid-cols-[75px_auto] gap-2 py-2'>
                    <Title customClassName='font-normal text-opacity-75'>Community</Title>
                    <div className='flex justify-end flex-wrap gap-1'>
                        {
                            links?.facebook_username &&
                            <Link href={`https://www.facebook.com/${links?.facebook_username}/`}>
                                <Badge
                                    icon='fab fa-facebook-f text-blue-500'
                                >
                                    Facebook
                                </Badge>
                            </Link>
                        }
                        {
                            links?.twitter_screen_name &&
                            <Link href={`https://twitter.com/${links?.twitter_screen_name}/`}>
                                <Badge
                                    icon='fab fa-twitter text-sky-500'
                                >
                                    Twitter
                                </Badge>
                            </Link>
                        }
                        {
                            links?.subreddit_url &&
                            <Link href={links?.subreddit_url}>
                                <Badge
                                    icon='fab fa-reddit-alien text-orange-500'
                                >
                                    Reddit
                                </Badge>
                            </Link>
                        }
                        {
                            links?.telegram_channel_identifier &&
                            <Link href={links?.telegram_channel_identifier}>
                                <Badge
                                    icon='fab fa-telegram text-sky-500'
                                >
                                    Telegram
                                </Badge>
                            </Link>
                        }
                        {
                            links?.official_forum_url?.[0] &&
                            <Link href={links?.official_forum_url?.[0]}>
                                <Badge
                                    icon='fa fa-microphone-lines'
                                >
                                    {getMainLink(links?.official_forum_url?.[0])}
                                </Badge>
                            </Link>
                        }
                    </div>
                </div>

                <div className='grid grid-cols-[75px_auto] gap-2 py-2'>
                    {
                        links?.blockchain_site?.length ?
                            <>
                                <Title customClassName='font-normal text-opacity-75'>Explorer</Title>
                                <div className='flex justify-end flex-wrap gap-1'>
                                    {
                                        links?.blockchain_site?.map(explorer => explorer &&
                                            <Link href={explorer} key={explorer}>
                                                <Badge icon='far fa-link-simple'>
                                                    {getMainLink(explorer)}
                                                </Badge>
                                            </Link>
                                        )
                                    }
                                </div>
                            </> : null
                    }
                </div>

                <div className='grid grid-cols-[85px_auto] gap-2 py-2'>
                    <Title customClassName='font-normal text-opacity-75'>Source Code</Title>
                    <div className='flex justify-end flex-wrap gap-1'>
                        <Link href={links?.repos_url?.github?.[0]}>
                            <Badge
                                icon='fab fa-github'
                            >
                                Github
                            </Badge>
                        </Link>
                    </div>
                </div>

                <div className='grid grid-cols-[85px_auto] gap-2 py-2'>
                    {
                        data?.categories?.length ?
                            <>
                                <Title customClassName='font-normal text-opacity-75'>Categories</Title>
                                <div className='flex justify-end flex-wrap gap-1'>
                                    {
                                        data?.categories?.map(category => category &&
                                            <Link href={category} key={category}>
                                                <Badge icon='fad fa-grid-2'>
                                                    {category}
                                                </Badge>
                                            </Link>
                                        )
                                    }
                                </div>
                            </> : null
                    }
                </div>

            </div>
        </div>
    );
};

export default CoinCommunityInfo;