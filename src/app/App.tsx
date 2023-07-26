import {useSelector} from 'react-redux';
import {useGetPostsQuery} from '../store/api';
import {currentPageSelector} from '../store/pageSlice/pageSelectors';
import {Pagination} from '../wigets/Pagination/Pagination';
import {Search} from '../wigets/Search/Search';
import {Table} from '../wigets/Table/Table';
import cls from './App.module.css';

function App() {
    const currentPage = useSelector(currentPageSelector);
    const {data, isLoading} = useGetPostsQuery(currentPage);
    return (
        <div className={cls.app}>
            <Search className={cls.search}/>
            {!isLoading && <Table className={cls.table} data={data}/>}
            <Pagination/>
        </div>
    );
}

export default App;
