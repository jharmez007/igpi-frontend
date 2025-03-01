import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { IoIosSearch, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { getImageDimensions } from '@sanity/asset-utils';
import { urlFor, client } from '../../client';
import { TruncatedText } from '../../components';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const query = '*[_type == "post"]';
            const data = await client.fetch(query);
            setPosts(data);
        };
        fetchPosts();
    }, []);

    // Sort posts by descending order of 'no'
    const sortedPosts = useMemo(() => [...posts].sort((a, b) => b.no - a.no), [posts]);

    const SampleImageComponent = useMemo(() => ({ value, isInline }) => {
        const { width, height } = getImageDimensions(value);
        return (
            <img
                src={urlFor(value).width(isInline ? 100 : 800).fit('max').auto('format').url()}
                alt={value.alt || ' '}
                loading="lazy"
                style={{
                    marginBottom: '40px',
                    display: isInline ? 'inline-block' : 'block',
                    aspectRatio: width / height,
                }}
            />
        );
    }, []);

    const components = useMemo(() => ({
        types: {
            image: SampleImageComponent,
        },
        marks: {
            em: ({ children }) => <em className="mb-10 lg:text-xl text-gray-600 font-semibold">{children}</em>,
            link: ({ value, children }) => (
                <a href={value?.href} target={value?.href?.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                    {children}
                </a>
            ),
        },
        block: {
            normal: ({ children }) => <p className="mb-10 p__text lg:text-xl">{children}</p>,
            h1: ({ children }) => <h1 className="mb-10 font-bold lg:text-4xl">{children}</h1>,
            h2: ({ children }) => <h2 className="mb-10 font-bold lg:text-3xl">{children}</h2>,
            h3: ({ children }) => <h3 className="mb-10 font-bold lg:text-2xl">{children}</h3>,
            blockquote: ({ children }) => <blockquote className="mb-10 border-l-4 border-[#0b8b68] pl-4 italic">{children}</blockquote>,
        },
        list: {
            bullet: ({ children }) => <ul className="mb-10 text-xl list-disc pl-5">{children}</ul>,
            number: ({ children }) => <ol className="mb-10 text-xl list-decimal pl-5">{children}</ol>,
        },
    }), [SampleImageComponent]);

    return (
        <div className='relative flex flex-col'>
            <div className="flex flex-col items-center justify-center bg-[#0b8b68] py-6 md:py-16 px-6">
                <h3 className="font-bold text-6xl md:text-7xl text-white">Blog</h3>
                <p className="font-bold text-2xl md:text-3xl text-white">Updates and inspiration</p>
            </div>

            <div className='app__flex py-1 w-full bg-[#f4f4f4] border-y items-center'>
                <input className="border text-black text-sm py-1 md:py-2 px-2 rounded-l-sm font-bold outline-none focus:border-[#0b8b68] transition-all duration-300" type="text" name="search"/>
                <button className='bg-[#0b8b68] hover:bg-[#034b38] rounded-r-sm text-sm py-2 px-2 md:py-3 md:px-3 ease-in duration-300'>
                    <IoIosSearch className="fill-white" />
                </button>
            </div>

            <div className='w-full app__flex flex-col'>
                {sortedPosts.map((post, index) => (
                    <div key={post.no} className={`w-full flex flex-col md:flex-row gap-10 justify-center items-center md:items-start py-10 px-2 ${index % 2 === 0 ? 'bg-white' : 'bg-[#f4f4f4]'}`}>
                        <div className='flex flex-col items-center relative'>
                            <Link to={`/post/${post.no}`} state={{ post, allPosts: sortedPosts }} className='relative group rounded-full overflow-hidden w-[170px] h-[170px]'>
                                <div className='absolute w-[170px] h-[170px] rounded-full border-[10px] border-white opacity-80 z-10 transition-all duration-500 ease-in-out group-hover:scale-125'></div>
                                <div className='absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-lg font-semibold opacity-0 scale-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100'>
                                    Read More
                                </div>
                                <img className='w-full h-full object-cover rounded-full' src={urlFor(post.mainImage)} alt={post.title} />
                            </Link>
                            <div className='text-xs'>{post.date}</div>
                            <div className='text-xs'>{`by ${post.author}`}</div>
                        </div>
                        <div className='flex flex-col w-full md:w-[350px] text-center md:text-left'>
                            <h2 className='uppercase font-bold text-lg md:text-2xl lg:text-3xl mb-5'>{post.title}</h2>
                            <TruncatedText body={post.body} components={components} />
                            <Link to={`/post/${post.no}`} state={{ post, allPosts: sortedPosts }}>
                                <button className="border-2 border-[#0b8b68] text-[#0b8b68] text-sm py-1 md:py-2 px-9 uppercase rounded-sm font-bold hover:bg-[#0b8b68] hover:text-white ease-in duration-300">READ MORE</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className='app__flex gap-2 rounded-sm py-1 w-full bg-[#f4f4f4] text-white font-bold border-y'>
                <button className='flex items-center gap-4 bg-[#0b8b68] hover:bg-[#034b38] text-xs py-2 px-4 ease-in duration-300'>
                    <IoIosArrowBack className="fill-white w-[20px] h-[20px]" />
                    <span>OLDER POSTS</span>
                </button>
                <button className='flex items-center gap-4 bg-[#0b8b68] hover:bg-[#034b38] text-xs py-2 px-4 ease-in duration-300'>
                    <span>NEWER POSTS</span>
                    <IoIosArrowForward className="fill-white w-[20px] h-[20px]" />
                </button>
            </div>
        </div>
    );
};

export default Blog;
