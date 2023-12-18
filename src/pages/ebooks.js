import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { HeadingEmphasis } from '../components/heading/emphasis/headingEmphasis'
import { rand } from '../services/utils';
import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';


const EbooksPage = () => {
  const [text, setText] = useState(undefined);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('https://type.fit/api/quotes?_limit=100')
            const idx = rand(0, response.data.length)
            console.log('idx');
            console.log(idx)

            setText(response.data[idx].text);
        }
        fetchData();
    }, []); // Or [] if effect doesn't need props or state

    return (
        <div>
            <Header></Header>

            <div className="h-screen w-full bg-slate-100 bg-opacity-30">

                {
                    text && 
                    <HeadingEmphasis
                        text={text}
                    />

                }

            </div>

            <Footer></Footer>
        </div>
    )


}

export { EbooksPage }