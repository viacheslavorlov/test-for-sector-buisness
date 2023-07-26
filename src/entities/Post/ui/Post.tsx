import {memo} from 'react';
import {classNames} from '../../../shared/lib/classNames/classNames';
import {PostInterface} from '../model/postInterface';
import cls from './Post.module.css'

interface PostProps {
    className?: string;
    post: PostInterface;
}

export const Post = memo((props: PostProps) => {
    const {post, className} = props;
    return (
        <tr className={classNames(className, cls.post)}>
            <td className={cls.id}>{post.id}</td>
            <td className={cls.title}>{post.title}</td>
            <td className={cls.body}>{post.body}</td>
        </tr>
    );
});


