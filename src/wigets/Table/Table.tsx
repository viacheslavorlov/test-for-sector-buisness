import {memo, useCallback, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import arrow from '../../assets/arrow.svg';
import {Post, PostInterface} from '../../entities/Post';
import {classNames} from '../../shared/lib/classNames/classNames';
import {currentPageSelector} from '../../store/pageSlice/pageSelectors';
import {searchValueSelector} from '../../store/searchSlice/searchSelectors';
import cls from './Table.module.css';

interface TableProps {
    className?: string;
    posts: PostInterface[];
}

export const Table = memo((props: TableProps) => {
    const {className, posts} = props;
    const currentPage = useSelector(currentPageSelector);
    const searchValue = useSelector(searchValueSelector);
    const [filteredPosts, setFilteredPosts] = useState<PostInterface[]>(posts);
    const filterData = useCallback((arr: PostInterface[], prop: keyof PostInterface) => {
        const sortedData = arr.slice().sort((item1, item2) => {
            if (item1[prop as keyof PostInterface] > item2[prop as keyof PostInterface]) {
                return 1;
            }
            if (item1[prop as keyof PostInterface] < item2[prop as keyof PostInterface]) {
                return -1;
            }
            return 0;
        });
        setFilteredPosts(searchData(searchValue, sortedData));
    }, [searchValue]);

    const searchData = (value: string, arr: PostInterface[]) => {
        if (value) {
            return arr.filter(
                item => {
                    return item.id.toString().match(value.trim())
                        || item.title.match(value)
                        || item.body.match(value);
                }
            );
        } else {
            return arr;
        }

    };

    useEffect(() => {
        filterData(posts, 'id'  as keyof PostInterface);
    }, []);

    useEffect(() => {
        filterData(posts, searchValue);
    }, [filterData, posts, searchValue, currentPage]);


    return (
        <main className={cls.main}>
            <table className={classNames(cls.table, className)}>
                <thead>
                <tr className={cls.tr}>
                    <th onClick={() => filterData(posts, 'id' as keyof PostInterface)} className={cls.id}>
                        <div>ID</div>
                        <img className={cls.arrow} src={arrow} alt="\/"/>
                    </th>
                    <th onClick={() => filterData(posts, 'title' as keyof PostInterface)} className={cls.title}>
                        <div>Заголовок</div>
                        <img className={cls.arrow} src={arrow} alt="\/"/>
                    </th>
                    <th onClick={() => filterData(posts, 'body' as keyof PostInterface)} className={cls.body}>
                        <div>Описание</div>
                        <img className={cls.arrow} src={arrow} alt="\/"/>
                    </th>
                </tr>
                </thead>
                <tbody className={cls.tbody}>
                {filteredPosts && filteredPosts.map((post: PostInterface) => (
                    <Post key={post.id} post={post}/>
                ))}
                </tbody>
            </table>
        </main>
    );
});
