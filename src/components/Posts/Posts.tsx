import React from 'react';
import {useState} from "react";
import {useEffect} from "react";

import {IPosts} from "../interface/interface";
import {postsService} from "../service/postsService";
import {Post} from "../Post/Post";

const Posts = () => {
    const [posts, setPosts] = useState<IPosts[]>([]);


    useEffect(() => {
        postsService.getAll().then(({data}) => setPosts(data))
    }, []);

    return (
        <div>
            {posts.map(item => <Post key={item.id} item={item}/>)}
        </div>
    );
};

export {Posts};