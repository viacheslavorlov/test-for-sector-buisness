import {useSelector} from 'react-redux';
import Loader from '../shared/ui/Loader/Loader';
import {useGetPostsQuery} from '../store/api';
import {currentPageSelector} from '../store/pageSlice/pageSelectors';
import {Pagination} from '../wigets/Pagination/Pagination';
import {Search} from '../wigets/Search/Search';
import {Table} from '../wigets/Table/Table';
import cls from './App.module.css';

function App() {
    const currentPage = useSelector(currentPageSelector);
    const {data, isLoading, error} = useGetPostsQuery(currentPage);

    if (isLoading) {
        return (
            <div className={cls.app}>
                <Loader/>
            </div>
        );
    }
    if (error) {
        return (
            <div className={cls.app}>
                <h1>При загрузке произошла ошибка</h1>;
            </div>
        )
    }

    return (
        <div className={cls.app}>
            <Search className={cls.search}/>
            <Table
				className={cls.table}
                posts={data}
			/>
            <Pagination/>
        </div>
    );
}

export default App;
