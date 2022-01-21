import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.post__image}>
                <img src={ props.image } alt="post"/>
            </div>
            <div className={classes.post__text_content}>
                <div className={classes.post__header}>
                    <h3>
                        { props.header }
                    </h3>
                </div>
                <div>
                    <p>
                        { props.content }
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Post;