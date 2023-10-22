import {useState, useEffect} from "react";

import {IPosts} from "../../interface/interface";
import {postsService} from "../../service/postsService";
import {Post} from "../Post/Post";
import {PostDetail} from "../PostDetail/PostDetail";
import css from './Posts.module.css'

const Posts = () => {
    const [posts, setPosts] = useState<IPosts[]>([]);
    const [detail, setDetail] = useState<IPosts>(null);

    useEffect(() => {
        postsService.getAll().then(({data}) => setPosts(data))
    }, []);

    const click = async (id: number): Promise<void> => {
        await postsService.getById(id).then(({data}) => setDetail(data))
    }

    return (
        <div>
            <div className={css.allPosts}>
                {posts.map(item => <Post key={item.id} item={item} click={click}/>)}
            </div>
            {
                detail && <PostDetail detail={detail}/>
            }
        </div>
    );
};

export {Posts};

