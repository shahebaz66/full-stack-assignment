import React, { useState, useEffect } from 'react';
import axios from "axios";
import Container from './container'
import Tags from './tags'


const Screen = (props) => {
    const baseUrl = "https://api.unsplash.com/search/photos";
    var [page, setPage] = useState(1);
    var [tab, setTab] = useState('All');
    var [photos, setPhotos] = useState([]);

    const handleScroll = () => {

        const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight

        if (bottom) {
            setPage(page + 1)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {
            passive: true
        });
        var options = {
            headers: {
                Authorization: `Client-ID 6627d1c7511a03b332b1fa77cbf009f8072f94427c64c34ec0f6436d3ad4cde5`
            },
            params: {
                query: tab,
                orientation: 'portrait',
                page,
                per_page: 12
            }
        };

        axios
            .get(baseUrl, options)
            .then(response => {
                console.log(response)
                var pa = [];


                for (var i of response.data.results) {
                    if (!photos.includes(i.urls.full)) {
                        pa.push(i.urls.full)
                    }
                }

                var final = [...photos]


                var a = final.concat(pa);


                setPhotos(a)
            });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [page])
    const changetab = (value) => {
        console.log(value);

        var options = {
            headers: {
                Authorization: `Client-ID 6627d1c7511a03b332b1fa77cbf009f8072f94427c64c34ec0f6436d3ad4cde5`
            },
            params: {
                query: value,
                orientation: 'portrait',
                page,
                per_page: 12
            }
        };

        axios
            .get(baseUrl, options)
            .then(response => {
                console.log(response)
                var pa1 = [];


                for (var i of response.data.results) {

                    pa1.push(i.urls.full)

                }




                setPhotos(pa1)
            });
        setTab(value)
    }
    return (
        <div>

            <Tags changetab={changetab} />
            <Container photos={photos} />
        </div>
    )
}

export default Screen