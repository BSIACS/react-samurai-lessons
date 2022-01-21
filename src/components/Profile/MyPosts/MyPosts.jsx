import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.posts.map((item) => {
        return <Post key={item.id} image={item.image} header={ item.header } content={item.text}/>
    });

    return (
        <div>
            { postsElements }
        </div>
    );
}

export default MyPosts;