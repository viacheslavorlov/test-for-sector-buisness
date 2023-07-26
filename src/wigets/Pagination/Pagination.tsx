import {memo, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {classNames} from '../../shared/lib/classNames/classNames';
import {currentPageSelector, totalPageCountSelector} from '../../store/pageSlice/pageSelectors';
import {pageSliceActions} from '../../store/pageSlice/pageSlice';
import {useAppDispatch} from '../../store/store';
import cls from './Pagination.module.css';

export const Pagination = memo(() => {
    const totalPages = useSelector(totalPageCountSelector);
    const currentPage = useSelector(currentPageSelector);
    const pages: { page: number, active: boolean }[] = [];
    const dispatch = useAppDispatch();

    const updateURL = (page) => {
        const newURL = new URL(window.location.href);
        newURL.searchParams.set('page', page);
        window.history.pushState({ path: newURL.href }, '', newURL.href);
    };

    for (let i = 1; i <= totalPages; i++) {
        pages.push({page: i, active: i === currentPage});
    }

    const onChangePage = (page: number) => {
        dispatch(pageSliceActions.setPage(page));
    };

    const onChangePageForward = () => {
        dispatch(pageSliceActions.plusPage());
    };

    const onChangePageBackward = () => {
        dispatch(pageSliceActions.minusPage());
    };

    useEffect(() => {
        updateURL(currentPage);
    }, [currentPage]);

    return (
        <div className={cls.pagination}>
            <button
                onClick={onChangePageBackward}
                className={cls.button}
            >
                Назад
            </button>
            <div className={cls.pageNumbers}>
                {pages.map(page => (
                        <button
                            className={classNames(cls.button, cls.singleNumber, page.active ? cls.active : '')}
                            key={page.page}
                            onClick={() => onChangePage(page.page)}
                        >
                            {page.page}
                        </button>
                    )
                )}
            </div>
            <button
                onClick={onChangePageForward}
                className={cls.button}
            >
                Далее
            </button>
        </div>
    );
});


